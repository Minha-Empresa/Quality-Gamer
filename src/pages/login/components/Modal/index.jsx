import React from 'react'

// TODO:
export default function Modal() {
	return (
		<div class="modal fade" id="ModalCarousel" tabindex="-1" role="dialog" aria-labelledby="ModalCarouselLabel">
			<div class="modal-dialog" role="document" />
			<div class="modal-content">
				<div class="modal-header bg-dark">
					<h4 class="modal-title" id="myModalLabel">Welcome to QualityGamer</h4>
				</div>

				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src="../../static/login/images/back_form.jpg" style="width: 400px; height: 400px;" alt="First slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Image 1</h5>
								<p>Image 1 from tutorial</p>
							</div>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="../../static/login/images/back_form.jpg" style="width: 400px; height: 400px;" alt="Second slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Image 2</h5>
								<p>Image 2 from tutorial</p>
							</div>
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="../../static/login/images/back_form.jpg" style="width: 400px; height: 400px;" alt="Third slide" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Image 3</h5>
								<p>Image 3 from tutorial</p>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	)
}
