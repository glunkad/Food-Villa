import {useState} from "react"
const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                isVisible ? (
                    <>
                        <button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button>
                        <p>{description}</p>
                    </>

                ) : (
                    <button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>
                )
            }
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex explicabo facilis hic id inventore nesciunt odio quia sequi. At autem laboriosam minus odit quaerat quod repellendus veritatis voluptatibus voluptatum?Aliquam amet architecto doloremque ducimus iusto necessitatibus non officia perspiciatis, quo quod similique sit ullam velit! Alias excepturi fuga labore magni minima quaerat temporibus tenur voluptatem? Dicta iure vel vitae.A, asperiores assumenda blanditiis, consequatur corporis delectus, deleniti deserunt doloribus enim est eum fugit ipsa nesciunt non numquam perferendis perspiciatis porro possimus rerum sequi soluta tempora temporibus? Dolorem, iure laboriosam. A, amet deserunt dolor est fugiat iure magni maiores minus mollitia nihil quidem rem similique suscipit vel veniam? Alias aliquid aspernatur at commodi cupiditate deserunt, distinctio illum natus nisi ullam? Accusantium aliquam aliquid aspernatur at atque, autem consequuntur cum debitis, delectus distinctio eligendi libero molestiae necessitatibus non ratione tenetur voluptate. Adipisci ducimus, inventore maxime officia optio quia quisquam. Expedita, quasi. In pariatur placeat rem reprehenderit repudiandae. Aliquam, delectus facilis ipsa laborum qui repellendus similique. Alias consequatur, dolore esse, excepturi facere facilis iure magnam maxime minima nesciunt numquam sint soluta tempore. A ad aliquam aut consequatur cumque delectus dicta dolores error fuga hic illum itaque, iure maxime natus numquam obcaecati"} isVisible={visibleSection === "about"} setIsVisible={() => setVisibleSection("about")}/>
            <Section title={"Team Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex explicabo facilis hic id inventore nesciunt odio quia sequi. At autem laboriosam minus odit quaerat quod repellendus veritatis voluptatibus voluptatum?Aliquam amet architecto doloremque ducimus iusto necessitatibus non officia perspiciatis, quo quod similique sit ullam velit! Alias excepturi fuga labore magni minima quaerat temporibus tenur voluptatem? Dicta iure vel vitae.A, asperiores assumenda blanditiis, consequatur corporis delectus, deleniti deserunt doloribus enim est eum fugit ipsa nesciunt non numquam perferendis perspiciatis porro possimus rerum sequi soluta tempora temporibus? Dolorem, iure laboriosam. A, amet deserunt dolor est fugiat iure magni maiores minus mollitia nihil quidem rem similique suscipit vel veniam? Alias aliquid aspernatur at commodi cupiditate deserunt, distinctio illum natus nisi ullam? Accusantium aliquam aliquid aspernatur at atque, autem consequuntur cum debitis, delectus distinctio eligendi libero molestiae necessitatibus non ratione tenetur voluptate. Adipisci ducimus, inventore maxime officia optio quia quisquam. Expedita, quasi. In pariatur placeat rem reprehenderit repudiandae. Aliquam, delectus facilis ipsa laborum qui repellendus similique. Alias consequatur, dolore esse, excepturi facere facilis iure magnam maxime minima nesciunt numquam sint soluta tempore. A ad aliquam aut consequatur cumque delectus dicta dolores error fuga hic illum itaque, iure maxime natus numquam obcaecati"} isVisible={visibleSection === "team"} setIsVisible={() => setVisibleSection("team")}/>
            <Section title={"Careers Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex explicabo facilis hic id inventore nesciunt odio quia sequi. At autem laboriosam minus odit quaerat quod repellendus veritatis voluptatibus voluptatum?Aliquam amet architecto doloremque ducimus iusto necessitatibus non officia perspiciatis, quo quod similique sit ullam velit! Alias excepturi fuga labore magni minima quaerat temporibus tenur voluptatem? Dicta iure vel vitae.A, asperiores assumenda blanditiis, consequatur corporis delectus, deleniti deserunt doloribus enim est eum fugit ipsa nesciunt non numquam perferendis perspiciatis porro possimus rerum sequi soluta tempora temporibus? Dolorem, iure laboriosam. A, amet deserunt dolor est fugiat iure magni maiores minus mollitia nihil quidem rem similique suscipit vel veniam? Alias aliquid aspernatur at commodi cupiditate deserunt, distinctio illum natus nisi ullam? Accusantium aliquam aliquid aspernatur at atque, autem consequuntur cum debitis, delectus distinctio eligendi libero molestiae necessitatibus non ratione tenetur voluptate. Adipisci ducimus, inventore maxime officia optio quia quisquam. Expedita, quasi. In pariatur placeat rem reprehenderit repudiandae. Aliquam, delectus facilis ipsa laborum qui repellendus similique. Alias consequatur, dolore esse, excepturi facere facilis iure magnam maxime minima nesciunt numquam sint soluta tempore. A ad aliquam aut consequatur cumque delectus dicta dolores error fuga hic illum itaque, iure maxime natus numquam obcaecati"} isVisible={visibleSection === "careers"} setIsVisible={() => setVisibleSection("careers")}/>
            {/*<AboutInstaMart />*/}
            {/*<DetailsOfInstaMart/>*/}
            {/*<TeamInstaMart />*/}
            {/*<Product />*/}
            {/*<Careers />*/}
        </div>
    )
}

export default Instamart;