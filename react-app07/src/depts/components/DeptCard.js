import { connect } from "react-redux";
import { EDIT } from "../reducer/actionTypes";

const DeptCard = ({dept,edit}) => (
    <div className="card card-primary">
        <div className="card-body p-0">
           <div className="row">
               <div className="col-sm-2 bg-dark text-light">
                   {dept.id}
               </div>
               <div className="col" onDoubleClick={e => edit(dept.id)}>
                   {dept.title}
               </div>
           </div>
        </div>
    </div>
);

const mapStateToProps =null;

const mapDispatchToProps = (dispatch) => ({
    edit : (id) => dispatch({type:EDIT,payload:id})
});

export default connect(mapStateToProps, mapDispatchToProps)(DeptCard);