// we will test files here 
import {render} from "@testing-library/react"
import AppSix from "./AppSix"
test("renders an h1", ()=>{
    const{getByText} = render(<AppSix/>);
    const h1 = getByText(/Hello React Testing Library/)
    expect(h1).toHaveTextContent("Hello React Testing Library")
})