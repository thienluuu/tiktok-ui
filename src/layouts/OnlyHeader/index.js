import Header from "~/layouts/Components/Header";
function OnlyHeader({children}) {
    return ( 
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
     );
}

export default OnlyHeader;