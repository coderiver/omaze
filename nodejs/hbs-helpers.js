module.exports = {
    progressPercentage: function(goal, sold) {
        var percent = sold / goal * 100;
        var str = (percent % 1 === 0) ? percent : percent.toFixed(1);
        return str + '%';
    },

    daysLeft: function(begin, end) {
        var oneDayInMilliseconds = (24 * 60 * 60 * 1000); // h * min * sec * msec
        return Math.round((end - begin) / oneDayInMilliseconds);
    }
};
