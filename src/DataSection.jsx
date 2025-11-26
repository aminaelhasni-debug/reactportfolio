import React from 'react'

const DataSection = () => {
  return (
    <div>
        <section className="second--section">
      <div className="card">
        <div className="section__skills">
          <h1> Skills</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea, saepe, quos et molestias ratione
            ducimus quae aliquid harum corrupti maxime laudantium sapiente beatae quidem nesciunt amet, vitae
            nihil
            odio?</p>
        </div>
        <div className="section__data">
          <div className="data__focus">
            <h3> MY FOCUS </h3> <span class="my">___________________</span>
            <p>UI/UX design</p>
            <p>Reponsive Desing</p>
            <p>Web Design</p>
            <p>Mobile Ap Desing</p>
          </div>
          <div className="data__progress">
            <div className="prog__lang">
              <label for=""> HTML</label>
              <progress value="90" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for="">CSS</label> <progress value="90" max="100" color="#6BBBE5"> </progress>
            </div>
            <div className="prog__lang">
              <label for="">javascript</label> <progress value="88" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for="">React</label><progress value="86" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for="">Photoshop</label> <progress value="79" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for="">Adobe XD</label><progress value="76" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for="">Node.js</label> <progress value="60" max="100"></progress>
            </div>
            <div className="prog__lang">
              <label for=""> Wordpress</label> <progress value="59" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default DataSection