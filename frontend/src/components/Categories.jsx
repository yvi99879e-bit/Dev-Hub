function Categories({ category, setCategory }) {

  const categories = [

    "All",

    "React",

    "Python",

    "Java",

    "Node.js",

    "AI",

    "DSA",

    "Database"

  ];

  return (

    <section className="section">

      <h2 className="section-title">

        Popular Categories

      </h2>

      <div className="category-grid">

        {

          categories.map((item,index)=>(

            <button

            key={index}

            className={

            category===item

            ?

            "category-btn active-category"

            :

            "category-btn"

            }

            onClick={()=>setCategory(item)}

            >

            {item}

            </button>

          ))

        }

      </div>

    </section>

  );

}

export default Categories;