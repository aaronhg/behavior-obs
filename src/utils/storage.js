import indexdb from './storages/indexdbSimple'
// import id,{setup} from './storges/id'
// import other from './storges/other'

// version
// test
// indexdb.test()
// let dbtype = "indexdb"







// export maxsize
// setup and update
var getAll = indexdb.getAll
var saveAll = indexdb.saveAll

// setup(setup)

export default {
    getAll,
    saveAll
}