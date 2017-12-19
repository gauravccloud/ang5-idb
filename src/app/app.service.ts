import { Injectable } from "@angular/core";

declare var idb:any 
@Injectable()
export class DataService {
    dbPromise:any;
    constructor() {
        this.dbPromise = idb.open('employee-data', 3, upgradeDb => {
            console.log('Creating description and price indexes');
            var store = upgradeDb.createObjectStore('employee',{keyPath: 'name',autoIncrement:true});
            store.createIndex('name', 'name', {unique: true});
            store.createIndex('company', 'company');
            store.createIndex('age', 'age');
        });
    };

    addItem(data): Promise<any> {
        console.log("Data is", data);
        return new Promise((resolve, reject) => {
            this.dbPromise.then(db => {
                var tx = db.transaction('employee', 'readwrite');
                var store = tx.objectStore('employee');
                store.add(data).then(response => {
                    resolve(response);
                })
            })  
        })
    };

    getAllItems():Promise<any> {
        console.log("Comes Here");
        return new Promise((resolve, reject) => {
            this.dbPromise.then(db => {
                var tx = db.transaction('employee', 'readwrite');
                var store = tx.objectStore('employee');
                store.getAll().then(response => {
                    resolve(response);
                })
            })
        })
    };

    getItemByKey(key) {
        return this.dbPromise.then(function(db) {
        var tx = db.transaction('products', 'readonly');
        var store = tx.objectStore('products');
        var index = store.index('name');
        return index.get(key);
        });
    };
}