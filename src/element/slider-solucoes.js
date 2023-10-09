
import TipoSolucoes from '../component/tipo-solucoes';

function SliderSolucoes() {
  return (
    <>
      <section className="pt-5">

	  		<div className="section-head style-3 text-center">
				<h2 className="title">Soluções em vendas, <br/>gestão de leads e atendimento digital</h2>
				<h3 className="sub-title">Para empresas de todos os segmentos de diversos tamanhos</h3>
				<p>Em um momento de grandes mudanças, estar preparado é fundamental para a sobrevivência de seu negócio. Nosso time atende mais de 40 variados segmentos do setor nacional e internacional</p>
			</div>
			<div className="container pb-5">
				<div className="row testimonials-wraper-1">
			
						<TipoSolucoes/>
					
				</div>
			</div>
		</section>
    </>
  )
}

export default SliderSolucoes;