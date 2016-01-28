/* global utils:true */
/* exported utils */

const latinize = str => {
    const strAccents = str.split('');
    let strAccentsOut = [];
    const strAccentsLen = strAccents.length;
    const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
    for (let y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) !== -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        }
        else {
            strAccentsOut[y] = strAccents[y];
        }
    }
    return strAccentsOut.join('');
};

const getArticleTitle = str => str.trim().split('\n')[0].substring(2);

const getArticleDescription = str => {
    const s = str.trim();
    return s.substr(s.indexOf('\n') + 1, 140).concat('...');
};

const slugify = s => {
    return latinize(s).trim().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};

utils = {
    latinize
    , getArticleTitle
    , getArticleDescription
    , slugify
};
