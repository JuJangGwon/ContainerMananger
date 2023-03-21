import SideBar from "../components/SideBar"
import Homeinform from "../components/home/Homeinform"

export default function homepage() {
    return (

        <div className="flex">
            <SideBar />
            <Homeinform />
        </div>
    );
}