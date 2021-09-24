import React from "react"

function App() {
    const projects = Projects.map(items => <Projects key={id} data={items} />)
    const contacts = Contact.map(items => <Contact key={id} data={items} />)
    
    return (
        <div>

        <Nav />
        <FrontPage />
        <Summary />
        <Projects />
        <Button />
        <Contact />
        <Footer />

        </div>
    )
}

export default App