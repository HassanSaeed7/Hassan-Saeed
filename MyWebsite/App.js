import React from "react"

function App() {
    const projects = Projects.map(items => <Projects key={id} value={items} />)
    const contacts = Contact.map(items => <Contact key={id} value={items} />)
    
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