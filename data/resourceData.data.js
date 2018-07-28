Game.data.resources = {
    categories: {
        energy: {
            title: "Energy",
            category: "energy",
            page: "resources",
            order: 1,
            unlocked: false
        },
        fabricated: {
            title: "Fabricated",
            category: "fabricated",
            page: "resources",
            order: 2,
            unlocked: false
        },
        earth: {
            title: "Earth Resources",
            category: "earth",
            page: "resources",
            order: 3,
            unlocked: true
        },
        innerSol: {
            title: "Inner Planetary Resources",
            category: "innerSol",
            page: "resources",
            order: 4,
            unlocked: false
        },
        outerSol: {
            title: "Outer Planetary Resources",
            category: "outerSol",
            page: "resources",
            order: 5,
            unlocked: false
        },
        science: {
            title: "Science",
            category: "science",
            page: "tech",
            order: 1,
            unlocked: false
        },
        spacecraft: {
            title: "Spacecraft",
            category: "spacecrat",
            page: "solar",
            order: 1,
            unlocked: true
        },
        rocketFuel: {
            title: "Rocket Fuel",
            category: "rocketFuel",
            page: "solar",
            order: 2,
            unlocked: true
        },
    },
    itemsTemplate: {
        current: 0,
        perSecond: 0,
        perSecondDisplay: 0,
        displayNeedsUpdate: true,
        hidden: false,
        iconPath: Game.constants.iconPath,
        iconExtension: Game.constants.iconExtension,
    },
    items: {
        energy: {
            name: "Energy",
            desc: "Energy is created by power sources such as steam engines and solar panels, eventually advancing to fusion and nuclear energy. You can hold a maximum of 100,000 energy, unlocking batteries allows you to increase this.",
            icon: "energyIcon",
            category: "energy",
            baseCapacity: 100000,
            gainNum: 1,
            manualgain: false,
            unlocked: false
        },
        plasma: {
            name: "Plasma",
            desc: "Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company.",
            icon: "plasmaIcon",
            category: "fabricated",
            baseCapacity: 100000,
            manualgain: true,
            unlocked: false
        },
        meteorite: {
            name: "Meteorite",
            desc: "Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.",
            icon: "meteoriteIcon",
            category: "fabricated",
            baseCapacity: 50,
            emc: 3,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        charcoal: {
            name: "Carbon",
            desc: "Carbon is a secondary tier resource and is used by Engines to produce power for your company. 1 Charcoal is created by burning wood",
            icon: "charcoalIcon",
            category: "fabricated",
            baseCapacity: 50,
            emc: 2,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        oil: {
            name: "Oil",
            desc: "Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.",
            icon: "oilIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 3,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        metal: {
            name: "Metal",
            desc: "Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.",
            icon: "metalIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 1,
            gainNum: 1,
            manualgain: true,
            unlocked: true
        },
        gem: {
            name: "Gem",
            desc: "Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.",
            icon: "gemIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 3,
            gainNum: 1,
            manualgain: true,
            unlocked: true
        },
        wood: {
            name: "Wood",
            desc: "Wood is one of the primary resources. It is used more often in early game for tools and buildings.",
            icon: "woodIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 1,
            gainNum: 1,
            manualgain: true,
            unlocked: true
        },
        silicon: {
            name: "Silicon",
            desc: "Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.",
            icon: "siliconIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 23,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        uranium: {
            name: "Uranium",
            desc: "Uranium is used for nuclear power generation because when it is split, it releases huge amounts of Energy. For this reason, it is prominent in many advanced machines and for propulsion technology as it is useful for inter-star-system travel. Unfortunately, it is hard to get and it requires a lot of resources to radiation-proof equipment.",
            icon: "uraniumIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 37,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        lava: {
            name: "Lava",
            desc: "Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.",
            icon: "lavaIcon",
            category: "earth",
            baseCapacity: 50,
            emc: 42,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        lunarite: {
            name: "Lunarite",
            desc: "Lunarite is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.",
            icon: "lunariteIcon",
            category: "innerSol",
            baseCapacity: 50,
            emc: 15,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        methane: {
            name: "Methane",
            desc: "Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.",
            icon: "methaneIcon",
            category: "innerSol",
            baseCapacity: 50,
            emc: 12,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        titanium: {
            name: "Titanium",
            desc: "Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.",
            icon: "titaniumIcon",
            category: "innerSol",
            baseCapacity: 50,
            emc: 17,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        gold: {
            name: "Gold",
            desc: "Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.",
            icon: "goldIcon",
            category: "innerSol",
            baseCapacity: 50,
            emc: 14,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        silver: {
            name: "Silver",
            desc: "Silver is another metal most commonly found in the asteroid belt.",
            icon: "silverIcon",
            category: "innerSol",
            baseCapacity: 50,
            emc: 16,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        hydrogen: {
            name: "Hydrogen",
            desc: "Hydrogen is extremely common on gas giants such as Jupiter and Saturn.",
            icon: "hydrogenIcon",
            category: "outerSol",
            baseCapacity: 50,
            emc: 33,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        helium: {
            name: "Helium",
            desc: "Helium is the second most common element on gas giants such as Jupiter and Saturn.",
            icon: "heliumIcon",
            category: "outerSol",
            baseCapacity: 50,
            emc: 39,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        ice: {
            name: "Ice",
            desc: "Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.",
            icon: "iceIcon",
            category: "outerSol",
            baseCapacity: 50,
            emc: 44,
            gainNum: 1,
            manualgain: true,
            unlocked: false
        },
        science: {
            name: "Science",
            desc: "Science is used for researching new technologies to further your progress in the game.",
            icon: "scienceIcon",
            category: "science",
            baseCapacity: 1000000,
            hideCapacity: true,
            gainNum: 1,
            manualgain: false,
            unlocked: false
        },
        rocketFuel: {
            name: "Rocket Fuel",
            desc: "Rocket fuel is created in chemical plants and is used to allow rockets to launch off into space and to travel to other planets and star systems.",
            icon: "rocketFuelIcon",
            category: "rocketFuel",
            baseCapacity: 1000000,
            hideCapacity: true,
            gainNum: 1,
            manualgain: false,
            unlocked: true
        },
        satellite: {
            name: "Satellite",
            desc: "We'll need to build satellites to begin exploring the solar system.  We will also need a rocket to launch them.  Don't forget about rocket fuel!</b>",
            icon: "satelliteIcon",
            category: "spacecraft",
            baseCapacity: 0,
            order: 1,
            manualgain: false,
            unlocked: true
        },
        rocket: {
            name: "Rocket",
            desc: "Building a rocket will allow for exploration around the solar system and will allow you to gather resources in space.",
            icon: "rocketIcon",
            category: "spacecraft",
            baseCapacity: 0,
            order: 2,
            manualgain: false,
            unlocked: true,
            antimatter: {
                name: "Antimatter",
                desc: "Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.",
                category: "interstellar",
                baseCapacity: 100000,
                order: 3,
                manualgain: false,
                unlocked: false
            }
        },
        antimatter: {
            name: 'Antimatter',
            desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.',
            category: 'interstellar',
            baseCapacity: 100000,
            order: 3,
            manualgain: false,
            unlocked: false
        }
    },
    storageTemplate: {
        name: "Storage Upgrade:",
        unlocked: true,
        costType: COST_TYPE.FIXED,
        current: 0,
        maxLevel: -1,
        displayNeedsUpdate: true,
        entries: {},
        buttonText: "Upgrade Storage"
    },
    storage: {
        plasma: {
            desc: "Upgrade your Plasma storage size to ",
            resource: "plasma",
            cost: {
                plasma: 50
            }
        },
        uranium: {
            desc: "Upgrade your Uranium storage size to ",
            resource: "uranium",
            cost: {
                uranium: 50,
                lunarite: 20
            }
        },
        lava: {
            desc: "Upgrade your Lava storage size to ",
            resource: "lava",
            cost: {
                lava: 50,
                lunarite: 20
            }
        },
        oil: {
            desc: "Upgrade your Oil storage size to ",
            resource: "oil",
            cost: {
                oil: 50,
                metal: 20
            }
        },
        metal: {
            desc: "Upgrade your Metal storage size to ",
            resource: "metal",
            cost: {
                metal: 50
            }
        },
        gem: {
            desc: "Upgrade your Gem storage size to ",
            resource: "gem",
            cost: {
                gem: 50,
                metal: 20
            }
        },
        charcoal: {
            desc: "Upgrade your Charcoal storage size to ",
            resource: "charcoal",
            cost: {
                charcoal: 50,
                metal: 20
            }
        },
        wood: {
            desc: "Upgrade your Wood storage size to ",
            resource: "wood",
            cost: {
                wood: 50,
                metal: 20
            }
        },
        silicon: {
            desc: "Upgrade your Silicon storage size to ",
            resource: "silicon",
            cost: {
                silicon: 50,
                lunarite: 20
            }
        },
        lunarite: {
            desc: "Upgrade your Lunarite storage size to ",
            resource: "lunarite",
            cost: {
                lunarite: 50,
                metal: 400
            }
        },
        methane: {
            desc: "Upgrade your Methane storage size to ",
            resource: "methane",
            cost: {
                methane: 50,
                lunarite: 20
            }
        },
        titanium: {
            desc: "Upgrade your Titanium storage size to ",
            resource: "titanium",
            cost: {
                titanium: 50,
                lunarite: 20
            }
        },
        gold: {
            desc: "Upgrade your Gold storage size to ",
            resource: "gold",
            cost: {
                gold: 50,
                lunarite: 20
            }
        },
        silver: {
            desc: "Upgrade your Silver storage size to ",
            resource: "silver",
            cost: {
                silver: 50,
                lunarite: 20
            }
        },
        hydrogen: {
            desc: "Upgrade your Hydrogen storage size to ",
            resource: "hydrogen",
            cost: {
                hydrogen: 50,
                lunarite: 20
            }
        },
        helium: {
            desc: "Upgrade your Helium storage size to ",
            resource: "helium",
            cost: {
                helium: 50,
                lunarite: 20
            }
        },
        ice: {
            desc: "Upgrade your Ice storage size to ",
            resource: "ice",
            cost: {
                ice: 50,
                lunarite: 20
            }
        },
        meteorite: {
            desc: "Upgrade your Meteorite storage size to ",
            resource: "meteorite",
            cost: {
                meteorite: 50,
                lunarite: 4
            }
        }
    }
}