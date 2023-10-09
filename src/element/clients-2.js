import ClientSlider from "../component/clientSlider";

function Clients2() {
    return (
        <>
            
            <div className="content-inner-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 n-clientes center-mob">
                        <h4><span>Algumas das</span> <br/>+ de 2.000 empresas<br/> <span>que confiam no Meets CRM.</span></h4>
                        </div>
                        <div className="col-lg-9 clients-carousel owl-none owl-carousel m-b30">
                            <ClientSlider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clients2;
