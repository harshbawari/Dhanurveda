const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var countriesSchema = new Schema({
    countryId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    groundForces: {
        activePersonnel: {
            type: Number
        },
        reservePersonnel: {
            type: Number
        },
        tanks: {
            type: Number
        },
        armoredVehicles: {
            type: Number
        },
        selfPropelledArtillery: {
            type: Number
        },
        towedArtillery: {
            type: Number
        },
        rocketProjectors: {
            type: Number
        }
    },
    navalForces: {
        aircraftCarriers: {
            type: Number
        },
        destroyers: {
            type: Number
        },
        frigates: {
            type: Number
        },
        corvettes: {
            type: Number
        },
        submarines: {
            type: Number
        },
        patrol: {
            type: Number
        },
        mineWarfare: {
            type: Number
        }
    },
    airForces: {
        fighters: {
            type: Number
        },
        dedicatedAttack: {
            type: Number
        },
        transports: {
            type: Number
        },
        trainers: {
            type: Number
        },
        specialMission: {
            type: Number
        },
        helicopters: {
            type: Number
        },
        attackHelicopters: {
            type: Number
        }
    },
    lastUpdated: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

var Countries = mongoose.model('countries', countriesSchema);

module.exports = Countries;