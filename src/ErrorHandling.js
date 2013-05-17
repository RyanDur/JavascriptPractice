function ErrorHandling() {
    "use strict";

    return {
        between: function(string, start, end) {
            var startAt = string.indexOf(start) + start.length;
            var endAt = string.indexOf(end, startAt);
            if (endAt == -1 || startAt == -1)
                return undefined;
            return string.slice(startAt, endAt);
        },

        lastElement: function(array) {
            if (array.length > 0)
                return array[array.length - 1];
            else
                throw "Can not take the last element of an empty array.";
        }
    };
};