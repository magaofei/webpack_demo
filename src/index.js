import _ from 'lodash'

function componment() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}


document.body.appendChild(componment());

