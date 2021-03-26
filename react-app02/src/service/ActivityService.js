
class ActivityService{
    constructor(){
        this.activities = [
            { id: 1, name: 'Create System Design', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Submitted' },
            { id: 2, name: 'Create Rest API', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Under Review' },
            { id: 3, name: 'Create React UI', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'Reviewed' },
            { id: 4, name: 'Create Build Plan', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'In Progress' },
            { id: 5, name: 'Create Deploy Plan', assignedTo: 'Srinu', assignedBy: 'Vamsy', status: 'In Progress' }
        ];
    }

    getAll(){
        return this.activities;
    }

    getById(id){
        return this.activities.find(a => a.id===id);
    }

    add(activity){
        this.activities.push(activity);
    }

    update(activity){
        this.activities = this.activities.map(a => a.id===activity.id?activity:a);
    }

    delete(id) {
        this.activities = this.activities.filter(a => a.id!==id);
    }
}

const activityService = new ActivityService();
export default activityService;