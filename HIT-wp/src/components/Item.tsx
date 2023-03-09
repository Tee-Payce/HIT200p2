import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import {formatCurrency} from "../utilities/formatCurrency"

type ItemProps = {
    id: number
    comboname: string
    varient: string
    price: number
    image: string
}

export function Item({ id, comboname, varient, price, image }: ItemProps) {
    const {getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <Card.Header className="bg-dark" >
                <h1>
                    {comboname}
                </h1>
            </Card.Header>
            <Card.Img variant="top" src={image} height="200px" style={{ objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column bg-dark "  style={{ fontSize: 15}}>

        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4" >
            <span>{varient}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
            <> { quantity === 0? (
                <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>
                    +ADD TO PLATES
                </Button>
            ): (<div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                <div className="d-flex align-items-center justify-content-center">
                   
                   <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                   <div>
                    you have
                   <span className="fs-2">{quantity}</span>
                    plates
                    </div>
                    <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                  
                    </div>
                <Button onClick={()=> removeFromCart(id)} variant="danger" size="sm">remove</Button>
            </div>)
            }
            </>
            

        </div>
        </Card.Body>
        </Card>
    )

}