import { connect } from "react-redux";
import DeptCard from "./DeptCard";
import { loadData } from '../reducer/thunkActions';
import { useEffect } from "react";
import DeptForm from "./DeptForm";

const Depts = ({ depts, wait, err, load }) => {

    useEffect(() => {
        load();
    }, []);

    return (
        <section>
            <h3>Departments List</h3>

            {wait &&
                <div className="alert alert-info">
                    <strong>Please wait while loading...!</strong>
                </div>
            }

            {err &&
                <div className="alert alert-danger">
                    <strong>{err}</strong>
                </div>
            }

            {depts &&
                <div className="card-columns m-3">
                    {depts.map(d => d.editing ?
                        <DeptForm key={d.id} dept={d} /> :
                        <DeptCard key={d.id} dept={d} />)}
                </div>
            }
        </section>
    );
};

const mapStateToProps = (state) => ({
    depts: state.depts.deptsList,
    wait: state.depts.wait,
    err: state.depts.errMsg
});

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(loadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Depts);