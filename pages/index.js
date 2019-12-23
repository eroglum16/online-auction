import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemCard from "../components/ItemCard";
import { getToken } from '../utils/auth'
import axios from "axios";
const apiConfig = require('../api-config');

class Index extends React.Component{
    constructor(props) {
        super(props);
        var token = this.props.token;
        this.getUser(token);
        this.getActiveSales();
        this.state = {
            loggedIn: token ? true : false,
            user: {},
            sales: []
        }
    }

    getUser(token){
        const url = apiConfig.serverUrl + '/user/get';
        axios.post(url, {}, {
            headers:{
                authorization: token
            }})
            .then((response) => {
                this.setState({
                    user: response.data.user
                });
            })
            .catch(function (error) {
                console.log(error);
            }.bind(this));
    }
    getActiveSales(){
        const url = apiConfig.serverUrl + '/sales/active';
        axios.get(url)
            .then((response) => {
                this.setState({
                    sales: response.data.sales
                });
            }).catch((error) => {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.sales);
        const sales = this.state.sales.map((sale) =>
            <ItemCard sale={sale} />
                      );
        return (
            <Layout page="home" user={this.state.user} loggedIn={this.state.loggedIn}>
                <div className="container bg-white" style={{ padding:'3%', marginTop:'3%'}}>
                    <h2> Online Açık Arttırma Uygulaması</h2>
                    <hr/>
                    <p style={{fontFamily:'verdana', fontSize:'17px', marginBottom:'50px'}}>
                        Ürünlerinizi platformumuzda açık arttırmaya sunabilir, veya aktif açık arttırmalara
                        katılarak değerli ürünleri alma fırsatı yakalayabilirsiniz. Aşağıdaki ürünlerden ilginizi çekeni seçerek
                        satışa giderseniz teklifte bulunabilirsiniz.
                    </p>
                    <hr></hr>
                    <div className="row">
                        {sales}
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.getInitialProps = async ctx => {
    // Check user's session
    const token = getToken(ctx);

    return { token }
};

export default Index;