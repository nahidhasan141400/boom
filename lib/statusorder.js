
function status(c){
    switch (c) {
        case 0:
            return 'Oredr cancel'
            break;
        case 1:
            return 'Oredr Placed'
            break;
        case 2:
            return "Confirmed"
            break;
        case 3:
            return "On Delivery"
            break;
        case 4:
            return "Completed"
        default:
            break;
    }
}

export default status;