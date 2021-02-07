chars.reduce((acc,curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return '${acc}<span class="char">${curr}</span>';
},"");