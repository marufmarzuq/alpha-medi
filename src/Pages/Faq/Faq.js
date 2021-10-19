import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./Faq.css"
const FAQ = () => {
     return (
          <>
               <Header></Header>
               <div className="faq-page my-5">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-6">
                                   <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                             <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                                  What’s the most common hear procedure?
                                                  </button>
                                             </h2>
                                             <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                                  <div class="accordion-body">
                                                       <p>Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies. Dramatically mesh low-risk high-yield alignments before transparent e-tailers.</p>
                                                       <p>Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with distinctive quality vectors. Globally revolutionize global sources through interoperable services.</p>
                                                       <p>Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate clicks-and-mortar testing procedures whereas next-generation manufactured products.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="accordion-item">
                                             <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                  Are heart operations painful?
                                                  </button>
                                             </h2>
                                             <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                                  <div class="accordion-body">
                                                       <p>Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.</p>
                                                       <p>Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.</p>
                                                       <p>Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="accordion-item">
                                             <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                                  Do you use anesthetics for patients?
                                                  </button>
                                             </h2>
                                             <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                                                  <div class="accordion-body">
                                                       <p>Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.</p>
                                                       <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <img className="img-fluid rounded-2" src="http://medicare.bold-themes.com/general-hospital/wp-content/uploads/sites/14/2018/03/img-general-hospital-09.jpg" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </>
     );
};

export default FAQ;