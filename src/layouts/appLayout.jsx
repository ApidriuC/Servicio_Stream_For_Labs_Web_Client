import react from  'react'
import './appLayout.css'

// Components 
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const WithAppLayout = (Content) => {

    return class extends react.Component {
        
        render (){ 
            const { showMessage } = this.props

            return (
                <div className="layout">
                    {/* Header */}
                    <div className="header"> <Header/> </div>
                    {/* Sidebar */}
                    <div className="sidebar"> <Sidebar/> </div>
                    {/* Content */}
                    <div className="content mx-2 my-2"> 
                        <Content showMessage={ showMessage } {...this.props}/> 
                    </div>
                </div>
            )
        }
    }
}

export default WithAppLayout