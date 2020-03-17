const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    query,
    add
}


async function query(filterBy = {}) {
    const criteria = await _buildCriteria(filterBy)
    console.log('criteria', criteria);

    const collection = await dbService.getCollection('comment')
    try {
        let comments;
        comments = await collection.find(criteria).toArray();
        // items.forEach(item => delete item.password);
        return comments
    } catch (err) {
        console.log('ERROR: cannot find items')
        throw err;
    }
}


async function add(comment) {
    const collection = await dbService.getCollection('comment')

    try {
        await collection.insertOne(comment)
        return comment
    } catch (err) {
        console.log('can not save comment');
        throw err
    }

}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.msg) {
        criteria["$or"] = [{ 'msg': { $regex: filterBy.msg.toLowerCase() } }, { 'email': { $regex: filterBy.msg.toLowerCase() } }]
    }

    console.log(criteria, ' criteria');

    return criteria;
}