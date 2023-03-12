import Contain from "./containerlist/Contain"
import ContainerEdit from "../pages/ContainerEdit"
import ContainList from "./containerlist/ContainList"

// 
// <ContainerEdit setOpenEdit={false} />
export default function ContainerList() {
    return (
        <div>
            <ContainList />
            <style jsx> {`
             div {
                 background-color : white;
                 width : 1000px;
                 height : 700px;
             }
            `}
            </style>
        </div>
    )
}