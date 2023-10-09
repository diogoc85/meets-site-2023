import Link from "next/link";


function SejaParceiro() {
  return (
    <>
      <section>
			<div className="container pb-5 mt-5">
				<div className="row action-box seja-parceiro mt-5 align-items-center shadow rounded m-mob">
					<div className="col-xl-8 col-lg-8 col-md-8 p-4">
						<div className="center-mob">
							<h3 className="title m-b20 text-white center-mob">Entre em contato e seja um afiliado meets.</h3>
							<p className="sub-title text-white mb-4">Nossa equipe de vendas/atendimento está preparada para entender e atender as necessidades da sua empresa. Entre em contato conosco que faremos um plano personalizado para você.</p>
							<a href="https://meets.idevaffiliate.com/signup.php" target="_blank" className="btn btn-info">Seja um afiliado</a>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 text-right box-seja-parceiro bg-black-blue">
						<img className="p-absolute img-seja-parceiro" data-aos="fade-up" data-aos-duration="600" src="images/banner/seja-parceiros.png" alt="" />
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default SejaParceiro;