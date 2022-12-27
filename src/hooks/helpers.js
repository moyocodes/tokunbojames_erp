// @ts-nocheck
/* eslint-disable import/no-anonymous-default-export */
// import moment from 'moment';

export default {

// formatDateAndTime(date) {
//     return moment(date).format('DD/MM/YYYY');
//   },

  statusLabels(status) {
    switch (status) {
      case 'true':
        return  <span className="badge badge-success">AVAILABLE</span>

      case 'false':
        return  <span className="badge badge-success">NOT AVAILABLE</span>

      default:
        return 'no status';
    }
  },

  toUpperCase(name)  {
      return name.toUpperCase();

  },
};
