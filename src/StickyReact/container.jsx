import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const Container=()=>{
    return(
        <StickyContainer>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>
                    
                        <Sticky topOffset={80}>
                        {({ style }) => <h1 style={{ ...style, backgroundColor: '#00ff00',zIndex : 10 }}>Header"</h1>}
                        </Sticky>
                       
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div style={{backgroundColor : 'grey',color:'green'}} >
                            <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus enim tenetur, eveniet quas, impedit eos ex laborum praesentium, perferendis rem unde doloribus repellendus necessitatibus a ducimus. Hic, accusamus eius?
                            Modi aspernatur unde rem sit accusantium assumenda repellendus cum, cupiditate tempore aut, placeat quo, ut minus rerum. Dolorum delectus repellendus libero earum dolorem, amet cupiditate reprehenderit nihil facilis, ad eum.
                            Recusandae debitis, maxime pariatur sint nesciunt nemo magni minima inventore officia, dolore et unde molestias voluptate quisquam at optio, nostrum porro quas ut assumenda ad omnis. Accusantium fugiat iste veritatis?
                            Odit dolorem animi a tenetur fugit adipisci molestias sequi quod fuga, saepe quae impedit ipsa explicabo beatae officia enim ipsum quasi architecto! Est atque quibusdam dignissimos corrupti ex beatae culpa!
                            Sequi eligendi maiores, itaque quisquam nostrum ducimus reiciendis minima porro delectus earum rem vel rerum, quidem soluta dignissimos tempora impedit, voluptatibus nisi aspernatur dolores consectetur blanditiis eum? Alias, recusandae deserunt!
                            Corrupti reiciendis incidunt eos laudantium maiores aliquam? Animi, reprehenderit molestias? Ea odio repellendus, suscipit qui excepturi voluptatum! Ad molestias ea cum at, non assumenda voluptatem iure dolorum, rerum dolore optio?
                            Corrupti cumque eum accusantium recusandae vel quam facere voluptatibus culpa! Repellendus accusantium blanditiis quod fugiat alias eveniet tempora illo cumque, ipsam nesciunt nihil ducimus officia ullam? Est accusantium dolorum quibusdam?
                            Laboriosam distinctio ratione doloremque optio. Corporis nemo rem possimus harum non eius voluptas ex soluta enim voluptate, consequuntur nihil, eligendi itaque rerum esse doloribus voluptatum! Dolore cum a consectetur debitis?
                            Dicta minima totam voluptatum repudiandae minus magni corporis illo maxime perferendis maiores facilis laboriosam, vitae nisi rem consequuntur fugit expedita dolores excepturi culpa dolorum. Hic aliquid illo maiores amet dolore.
                            Facere velit quam doloremque nemo nam nobis omnis placeat reiciendis magni laboriosam ullam, maxime porro commodi, nostrum unde animi cum asperiores possimus harum perspiciatis repellendus aperiam veniam? Est, laborum nostrum.</p>
                            <p className='container'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam quas, exercitationem corrupti impedit in magni, blanditiis repellat minima sunt voluptates itaque sint, laborum dolor aut pariatur animi atque porro.
                                Vel, consequatur voluptatem! Magni nobis facere nostrum, dolores totam rem, quos at pariatur ullam nisi consequuntur asperiores illo suscipit. Nesciunt quae eius reprehenderit tempora. Debitis laudantium dolorem dolorum mollitia ratione?
                                Natus quia eos harum veniam praesentium alias temporibus repellat ipsam totam, impedit mollitia cum aliquam enim in ducimus eius, molestias vel quisquam at perferendis dolor! Possimus reiciendis voluptates debitis similique.
                                Ducimus consectetur sunt possimus repellat quia, asperiores nesciunt esse similique a veritatis error, perferendis dignissimos laboriosam officiis? Libero deserunt, dolorum aliquid, quibusdam temporibus maxime non perspiciatis dicta eius, esse atque.
                                Non, aliquid neque porro voluptatem ut laborum quo cumque quibusdam error! Voluptatibus cum numquam pariatur dolor a nemo quod quo quas repellendus laboriosam. Tempore animi eius, repudiandae ipsa praesentium facilis!
                            </p>
                            <p className='container'>
                            
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit iste officia, qui possimus porro vel vitae saepe repellat error itaque laboriosam quam ullam tenetur ipsam id sequi sunt totam?
                                Nesciunt, labore? Exercitationem molestiae illo omnis fugiat itaque ullam cumque eum minus sint, assumenda dolorum hic quasi iusto possimus dolorem. Iste nobis est quo officia ex sed cumque, assumenda qui?
                                Excepturi sit consequatur ipsa suscipit, cupiditate tenetur explicabo quos perferendis quam neque dolore dolores dolor hic quia deleniti vel? Illo, praesentium repellat? Excepturi fugit distinctio sapiente, nostrum soluta debitis voluptatum.
                                Nam accusantium minima quo consequatur maxime itaque incidunt enim quia exercitationem dignissimos? Mollitia, esse eius reprehenderit aliquid voluptate, dignissimos fugit porro odit aperiam doloribus cum iure quia id dolorem dolor!
                            </p>
                            <p className='container'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem enim, incidunt delectus nemo voluptatibus aut cumque impedit alias reiciendis saepe repudiandae mollitia praesentium totam dignissimos non, animi cum earum est!
                                Reprehenderit vero deleniti tempora delectus impedit, unde nihil eum quidem cumque perferendis architecto sequi quibusdam cum. Cum error esse dolores, eaque animi ratione doloribus. Debitis sequi animi reprehenderit libero repudiandae.
                                At rerum optio consequatur in, quasi eius nisi sint quae similique officia corrupti non magnam, mollitia accusamus obcaecati tempore commodi doloribus nihil nulla iste sequi eaque autem? Ipsam, aliquam consequatur!
                                Dolor incidunt quasi ducimus dolores quae ipsum laborum, molestias aperiam corrupti, voluptas similique. Rerum, distinctio dolor eaque aut, possimus cupiditate commodi molestiae suscipit sapiente debitis perspiciatis ad, porro quibusdam corrupti.
                            </p>
                        </div>
                    </div>
                    {/* <ainer style={{zIndex : 10}}>  */}
                    <div className="col-md-4">
                        
                            <div className='container'>
                                <Sticky topOffset={80}>
                                {(style)=>
                                <p style={{...style,color:'green',backgroundColor : 'skyblue'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi velit fugit omnis nemo necessitatibus, voluptatum commodi odit cumque, dolore vitae aspernatur accusantium? Accusantium perferendis atque sequi aliquid quasi, adipisci rerum.
                                Possimus magni tempore dolores! Fugiat asperiores exercitationem numquam facilis ut officia veniam incidunt maxime. Iusto, id quisquam. Nesciunt numquam sunt, sapiente architecto et commodi alias sit impedit ipsam odit totam?
                                Perferendis deserunt recusandae voluptatem quis doloribus ipsam ut! Et maiores officia, aliquid, voluptate excepturi aut aperiam ut possimus sunt atque molestias earum sit eligendi impedit asperiores facere nesciunt quis libero!</p>
                                }</Sticky>
                            </div>
                        
                    </div>
                </div>
                <div className="row col-md-12">
                    <p style={{color : 'blue',backgroundColor : 'yellow'}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, quasi quia inventore dignissimos vero cumque autem, repudiandae odit molestiae minus voluptas. Obcaecati animi dicta suscipit blanditiis aliquid explicabo. Placeat, tempore.
                        Voluptatum consectetur nulla, ab quis eum repudiandae quidem dolor accusantium excepturi dicta reiciendis. Distinctio possimus maxime quam culpa ratione, soluta nihil corrupti. Exercitationem officiis fuga explicabo veritatis ducimus cum earum.
                        Maxime dolores placeat labore quisquam quas, perferendis molestias nulla sunt laboriosam culpa incidunt ratione error consequatur est, eius soluta voluptas autem tenetur commodi cum omnis beatae? Nulla, deserunt nisi. Magnam?
                        Dolorem hic odio molestias reiciendis neque, deserunt saepe earum laudantium. Qui, id deleniti quaerat itaque quisquam molestiae dolorum sit nostrum magni ex cumque impedit, est beatae neque, omnis aut autem?
                        Neque animi dignissimos doloribus exercitationem? Eaque eius fuga doloribus ratione inventore distinctio nemo suscipit totam fugit, cumque maiores ipsam error porro dolore nihil, voluptates asperiores provident vero? Porro, culpa sequi.
                        Dignissimos ut quibusdam mollitia fugiat dolore ab corporis accusamus temporibus sint tempore fugit laudantium, tenetur delectus similique. Praesentium fugiat ratione unde enim. Autem architecto non voluptatibus, vitae doloribus voluptas eius.
                        Autem sequi adipisci mollitia id quo porro, animi, explicabo eos consectetur tenetur voluptatum sit ipsa nihil culpa impedit, magnam nemo. Placeat eos eveniet ipsa deserunt, dolore voluptatibus inventore enim architecto!
                        Veniam, est omnis nemo ducimus fuga magnam maiores eveniet praesentium harum, veritatis perspiciatis nostrum nesciunt labore quo temporibus reiciendis neque facere laudantium deserunt! Architecto, nulla quasi? Sed culpa ex doloribus.
                        Consequuntur reprehenderit maiores vel modi ea sapiente mollitia cupiditate repellendus est tempora et at quam pariatur tenetur alias provident quaerat omnis similique illo, eaque odio, ipsum dicta? Repellat, fuga itaque.
                        Porro sit possimus iure ipsa. Non quam quidem facere facilis. Nisi eos fugiat itaque illo, porro consequatur quam exercitationem cupiditate, consequuntur minus ipsum in facilis quas corrupti, reiciendis aspernatur vel!
                    </p>
                </div>
            </div>
            </StickyContainer> 
    )
}
export default Container;