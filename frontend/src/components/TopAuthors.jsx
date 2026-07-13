function TopAuthors() {

  const authors = [

    "Vaibhav Verma",

    "Rahul Sharma",

    "Aman Singh",

    "Priya Gupta"

  ];

  return (

    <section className="section">

      <h2 className="section-title">

        Top Authors

      </h2>

      <div className="grid">

        {

          authors.map((author,index)=>(

            <div
              key={index}
              className="card"
              style={{padding:"30px",textAlign:"center"}}
            >

              <h2>👨‍💻</h2>

              <h3>{author}</h3>

              <p>Full Stack Developer</p>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default TopAuthors;