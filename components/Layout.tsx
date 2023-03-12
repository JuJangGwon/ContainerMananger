import NavBar from "./Navbar";

export default function Layout({children}: React.PropsWithChildren)
{
    return (
    <>
        <NavBar />
        <div> {children}</div>
    </>
    )
}
