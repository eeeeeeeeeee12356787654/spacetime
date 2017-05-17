function refresh(){
	if(energy < 250 && energy > -250){
		document.getElementById("energy").innerHTML = Game.settings.format(energy*2)/2;
	}
	else{
		document.getElementById("energy").innerHTML = Game.settings.format(energy);
	}
	document.getElementById("plasma").innerHTML = Game.settings.format(plasma);
	document.getElementById("oil").innerHTML = Game.settings.format(oil);
	document.getElementById("metal").innerHTML = Game.settings.format(metal);
	document.getElementById("gem").innerHTML = Game.settings.format(gem);
	document.getElementById("charcoal").innerHTML = Game.settings.format(charcoal);
	document.getElementById("wood").innerHTML = Game.settings.format(wood);
	document.getElementById("spaceMetal").innerHTML = Game.settings.format(spaceMetal);
	document.getElementById("methane").innerHTML = Game.settings.format(methane);
	document.getElementById("titanium").innerHTML = Game.settings.format(titanium);
	document.getElementById("gold").innerHTML = Game.settings.format(gold);
	document.getElementById("silver").innerHTML = Game.settings.format(silver);
	document.getElementById("silicon").innerHTML = Game.settings.format(silicon);
	document.getElementById("uranium").innerHTML = Game.settings.format(uranium);
	document.getElementById("lava").innerHTML = Game.settings.format(lava);
	document.getElementById("hydrogen").innerHTML = Game.settings.format(hydrogen);
	document.getElementById("helium").innerHTML = Game.settings.format(helium);
	document.getElementById("ice").innerHTML = Game.settings.format(ice);
	document.getElementById("meteorite").innerHTML = Game.settings.format(meteorite);

	if(science < 100){
		document.getElementById("science").innerHTML = Game.settings.format(science, 1);
	}
	else{
		document.getElementById("science").innerHTML = Game.settings.format(science);
	}

    if(rocketFuel < 100) {
        document.getElementById("rocketFuel").innerHTML = Game.settings.format(rocketFuel, 1);
    } else {
        document.getElementById("rocketFuel").innerHTML = Game.settings.format(rocketFuel);
    }
}

function refreshPerSec(){
	var energyInput = (charcoalEngine*charcoalEngineOutput)+(solarPanel*solarPanelOutput)+(methaneStation*23)+(nuclearStation*153)+(magmatic*191)+(fusionReactor*273);
	energyInput += (swarm*25000) + (sphere*1000000);
	if(charcoal + charcoalps/10 >= charcoalEngine/10){ 
		charcoal -= charcoalEngine/10;
	}
	else{
		energyInput -= charcoalEngine*2;
	}
	if(methane + methaneps/10 >= methaneStation*6/10){
		methane -= methaneStation*6/10;
	}
	else{
		energyInput -= methaneStation*23;
	}
	if(uranium + uraniumps/10 >= nuclearStation*7/10){
		uranium -= nuclearStation*7/10;
	}
	else{
		energyInput -= nuclearStation*153;
	}
	if(lava + lavaps/10 >= magmatic*11/10){
		lava -= magmatic*11/10;
	}
	else{
		energyInput -= magmatic*191;
	}
	if(hydrogen + hydrogenps/10 >= fusionReactor*10/10 && helium + heliumps >= fusionReactor*10/10){
		hydrogen -= fusionReactor*10/10;
		helium -= fusionReactor*10/10;
	}
	else{
		energyInput -= fusionReactor*273;
	}
	var energyOutput = (pumpjack*4)+(heavyDrill*2)+(advancedDrill*2)+(laserCutter*4);
	energyOutput += (moonDrill*20)+(suctionExcavator*16)+(spaceMetalDrill*13)+(destroyer*19)+(spaceLaser*24)+(scorcher*18);
	energyOutput += (cubic*40)+(extractor*58)+(magnet*63)+(tanker*72)+(iceDrill*83);

	energyOutput += (oilField*17)+(gigaDrill*9)+(diamondDrill*15)+(deforester*16);
	energyOutput += (moonQuarry*70)+(spaceCow*49)+(pentaDrill*46)+(deathStar*81)+(bertha*65)+(annihilator*53);
	energyOutput += (enricher*180)+(extruder*237)+(eCell*234)+(compressor*248)+(freezer*397);

	energyOutput += (oilRig*44)+(quantumDrill*24)+(carbyneDrill*40)+(infuser*43);
	energyOutput += (planetExcavator*182)+(vent*132)+(titanDrill*123)+(actuator*223)+(cannon*170)+(desert*138);
	energyOutput += (recycler*463)+(veluptuator*698)+(hindenburg*631)+(skimmer*670)+(mrFreeze*1135);

	if(charcoalToggled === true){
		energyOutput += (furnace*3)+(kiln*13)+(fryer*34);
	}
	plasmaps = 0;
	if(meteoriteToggled === true && plasma >= 3){
		if(meteorite + printer/10 + web*8/10<= meteoriteStorage){
			plasma -= (printer*3/10 + web*21/10);
			meteorite += (printer/10 + web*8/10);
			meteoriteps = printer + web*8;
			plasmaps -= printer*3 + web*21;
		}
		else{
			meteorite = meteoriteStorage;
			meteoriteps = 0;
		}
	}
	if(energy >= 1000 && hydrogen >= 10 && heaterToggled === true){
		if(plasma + heater/10 <= 100000){
			energyOutput += (heater*1000);
			plasma += heater/10;
			hydrogen -= heater*10/10;
			plasmaps += heater;
		}
		else{
			plasma = 100000
		}
	}
	if(energy >= 8500 && helium >= 80 && plasmaticToggled === true){
		if(plasma + plasmatic*10/10 <= 100000){
			energyOutput += (plasmatic*8500);
			plasma += plasmatic*10/10;
			helium -= plasmatic*80/10;
			plasmaps += plasmatic*10;
		}
		else{
			plasma = 100000
		}
	}
	if(energy != 0 && energyps != 0){
		if(energy >= energyps){
			if(energyLow === true){
				energyTimer += 0.1;
				if(energyTimer >= 3){
					document.getElementById("energyLow").className = "text-muted small ng-binding red hidden";
					energyLow = false;
					energyTimer = 0;
				}
			}
		}
		else{
			energyTimer = 0;
		}
	}
	if(energy >= 10){
		energyps = energyInput-energyOutput;
		oilps = pump + (pumpjack*pumpjackOutput) + (oilField*63) + (oilRig*246);
		metalps = miner + (heavyDrill*heavyDrillOutput) + (gigaDrill*108) + (quantumDrill*427);
		gemps = gemMiner + (advancedDrill*advancedDrillOutput) + (diamondDrill*89) + (carbyneDrill*358);
		charcoalps = woodburner + (furnace*furnaceOutput) + (kiln*53) + (fryer*210);
		woodInput = woodburner*2 + (furnace*furnaceWoodInput) + (kiln*56) + (fryer*148);
		woodps = woodcutter + (laserCutter*laserCutterOutput) + (deforester*74) + (infuser*297);
		spaceMetalps = moonWorker + (moonDrill*10) + (moonQuarry*53) + (planetExcavator*207);
		methaneps = vacuum + (suctionExcavator*8) + (spaceCow*37) + (vent*149);
		titaniumps = explorer + (spaceMetalDrill*9) + (pentaDrill*49) + (titanDrill*197);
		goldps = droid + (destroyer*8) + (deathStar*51) + (actuator*211);
		silverps = scout + (spaceLaser*13) + (bertha*53) + (cannon*208);
		siliconps = blowtorch + (scorcher*9) + (annihilator*40) + (desert*157);
		uraniumps = grinder + (cubic*9) +(enricher*61) + (recycler*235);
		lavaps = crucible + (extractor*7) + (extruder*43) + (veluptuator*187);
		hydrogenps = collector + (magnet*5) + (eCell*28) + (hindenburg*113);
		heliumps = drone + (tanker*11) + (compressor*57) + (skimmer*232);
		iceps = icePick + (iceDrill*9) + (freezer*65) + (mrFreeze*278);
	}
	if(energy <= 10){
		if(windowLoaded){
			if(energyLow === false){
				document.getElementById("energyLow").className = "text-muted small ng-binding red";
				energyLow = true;
			}
		}
		energyps = energyInput;
		uraniumps = grinder;
		oilps = pump;
		metalps = miner;
		gemps = gemMiner;
		charcoalps = woodburner;
		woodInput = woodburner*2
		woodps = woodcutter;
		spaceMetalps = moonWorker;
		methaneps = vacuum;
		titaniumps = explorer;
		goldps = droid;
		silverps = scout;
		siliconps = blowtorch;
		lavaps = crucible;
		hydrogenps = collector;
		heliumps = drone;
		iceps = icePick;
	}
	scienceps = (lab*0.1) + (labT2*1) + (labT3*10);
	if(scienceps < 100){
		document.getElementById("scienceps").innerHTML = Game.settings.format(scienceps*10)/10;
	}
	else{
		document.getElementById("scienceps").innerHTML = Game.settings.format(scienceps);
	}
	document.getElementById("plasmaps").innerHTML = Game.settings.format(plasmaps);
	document.getElementById("plasma").className = "";
	if(plasma <= 0){
		document.getElementById("plasma").className = "red";
	}
	if(energyps >= 0){
		if(energyps > 250){
			document.getElementById("energyps").innerHTML = Game.settings.format(energyps);
		}
		else{
			document.getElementById("energyps").innerHTML = Game.settings.format(energyps*2)/2;
		}
	}
	else{
		if(energyps < -250){
			document.getElementById("energyps").innerHTML = Math.round(energyps);
		}
		else{
			document.getElementById("energyps").innerHTML = Math.round(energyps*2)/2;
		}
	}
	if(energy >= getMaxEnergy()){
		document.getElementById("energy").className = "green";
	}
	else{
		document.getElementById("energy").className = "";
	}
	document.getElementById("uraniumps").innerHTML = Game.settings.format(uraniumps - nuclearStation*7);
	document.getElementById("uranium").className = "";
	if(uranium === 0){
		document.getElementById("uranium").className = "red";
	}
	if(chemicalPlantToggled === true){
		document.getElementById("oilps").innerHTML = Game.settings.format(oilps - chemicalPlant*20);
	}
	else{
		document.getElementById("oilps").innerHTML = Game.settings.format(oilps);
	}
	document.getElementById("oil").className = "";
	if(oil >= oilStorage){
		document.getElementById("oil").className = "green";
	}
	if(oil === 0){
		document.getElementById("oil").className = "red";
	}
	document.getElementById("metalps").innerHTML = Game.settings.format(metalps);
	document.getElementById("metal").className = "";
	if(metal >= metalStorage){
		document.getElementById("metal").className = "green";
	}
	if(metal === 0){
		document.getElementById("metal").className = "red";
	}
	document.getElementById("gemps").innerHTML = Game.settings.format(gemps);
	document.getElementById("gem").className = "";
	if(gem >= gemStorage){
		document.getElementById("gem").className = "green";
	}
	if(gem === 0){
		document.getElementById("gem").className = "red";
	}
	document.getElementById("charcoal").className = "";
	if(charcoal === 0){
		document.getElementById("charcoal").className = "red";
	}
	document.getElementById("wood").className = "";
	if(wood >= woodStorage){
		document.getElementById("wood").className = "green";
	}
	if(wood === 0){
		document.getElementById("wood").className = "red";
	}
	document.getElementById("spaceMetalps").innerHTML = Game.settings.format(spaceMetalps);
	document.getElementById("spaceMetal").className = "";
	if(spaceMetal >= spaceMetalStorage){
		document.getElementById("spaceMetal").className = "green";
	}
	if(spaceMetal === 0){
		document.getElementById("spaceMetal").className = "red";
	}
	document.getElementById("methaneps").innerHTML = Game.settings.format(methaneps - methaneStation*6);
	document.getElementById("methane").className = "";
	if(methane === 0){
		document.getElementById("methane").className = "red";
	}
	document.getElementById("titaniumps").innerHTML = Game.settings.format(titaniumps);
	document.getElementById("titanium").className = "";
	if(titanium >= titaniumStorage){
		document.getElementById("titanium").className = "green";
	}
	if(titanium === 0){
		document.getElementById("titanium").className = "red";
	}
	document.getElementById("goldps").innerHTML = Game.settings.format(goldps);
	document.getElementById("gold").className = "";
	if(gold >= goldStorage){
		document.getElementById("gold").className = "green";
	}
	if(gold === 0){
		document.getElementById("gold").className = "red";
	}
	document.getElementById("silverps").innerHTML = Game.settings.format(silverps);
	document.getElementById("silver").className = "";
	if(silver >= silverStorage){
		document.getElementById("silver").className = "green";
	}
	if(silver === 0){
		document.getElementById("silver").className = "red";
	}
	document.getElementById("siliconps").innerHTML = Game.settings.format(siliconps);
	document.getElementById("silicon").className = "";
	if(silicon >= siliconStorage){
		document.getElementById("silicon").className = "green";
	}
	if(silicon === 0){
		document.getElementById("silicon").className = "red";
	}
	document.getElementById("lavaps").innerHTML = Game.settings.format(lavaps - magmatic*11);
	document.getElementById("lava").className = "";
	if(lava === 0){
		document.getElementById("lava").className = "red";
	}
	if(heaterToggled === true){
		document.getElementById("hydrogenps").innerHTML = Game.settings.format(hydrogenps - fusionReactor*10 - heater*10);
	}
	else{
		document.getElementById("hydrogenps").innerHTML = Game.settings.format(hydrogenps - fusionReactor*10);
	}
	document.getElementById("hydrogen").className = "";
	if(hydrogen === 0){
		document.getElementById("hydrogen").className = "red";
	}
	if(plasmaticToggled === true){
		document.getElementById("heliumps").innerHTML = Game.settings.format(heliumps - fusionReactor*10 - plasmatic*80);
	}
	else{
		document.getElementById("heliumps").innerHTML = Game.settings.format(heliumps - fusionReactor*10);
	}
	document.getElementById("helium").className = "";
	if(helium === 0){
		document.getElementById("helium").className = "red";
	}
	document.getElementById("iceps").innerHTML = Game.settings.format(iceps);
	document.getElementById("ice").className = "";
	if(ice >= iceStorage){
		document.getElementById("ice").className = "green";
	}
	if(ice === 0){
		document.getElementById("ice").className = "red";
	}
	if(meteoriteToggled){
		document.getElementById("meteoriteps").innerHTML = Game.settings.format(meteoriteps);
	}
	else{
		document.getElementById("meteoriteps").innerHTML = 0;
	}
	document.getElementById("meteorite").className = "";
	if(meteorite >= meteoriteStorage){
		document.getElementById("meteorite").className = "green";
	}
	if(meteorite === 0){
		document.getElementById("meteorite").className = "red";
	}

}

function refreshUI(){
	if(heaterToggled === true){
		document.getElementById("heaterToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("heaterToggled").innerHTML = "On";
	}
	if(plasmaticToggled === true){
		document.getElementById("plasmaticToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("plasmaticToggled").innerHTML = "On";
	}
	if(charcoalToggled === true){
		document.getElementById("charcoalToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("charcoalToggled").innerHTML = "On";
	}
	if(chemicalPlantToggled === true){
		document.getElementById("chemicalPlantToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("chemicalPlantToggled").innerHTML = "On";
	}
	if(meteoriteToggled === true){
		document.getElementById("meteoriteToggled").innerHTML = "Off";
	}
	else{
		document.getElementById("meteoriteToggled").innerHTML = "On";
	}

	document.getElementById("autoSaveTimer").innerHTML = "Autosaving in 2 minutes";
	document.getElementById("energyStorage").innerHTML = Game.settings.format(getMaxEnergy());
	document.getElementById("uraniumStorage").innerHTML = Game.settings.format(uraniumStorage);
	document.getElementById("uraniumNextStorage").innerHTML = Game.settings.format(uraniumNextStorage);
	document.getElementById("uraniumStorageCost").innerHTML = Game.settings.format(uraniumStorage);
	document.getElementById("uraniumStorageSpaceMetalCost").innerHTML = Game.settings.format(uraniumNextStorage/2.5);
	document.getElementById("oilStorage").innerHTML = Game.settings.format(oilStorage);
	document.getElementById("oilNextStorage").innerHTML = Game.settings.format(oilNextStorage);
	document.getElementById("oilStorageCost").innerHTML = Game.settings.format(oilStorage);
	document.getElementById("oilStorageMetalCost").innerHTML = Game.settings.format(oilStorage/2.5);
	document.getElementById("metalStorage").innerHTML = Game.settings.format(metalStorage);
	document.getElementById("metalNextStorage").innerHTML = Game.settings.format(metalNextStorage);
	document.getElementById("metalStorageCost").innerHTML = Game.settings.format(metalStorage);
	document.getElementById("gemStorage").innerHTML = Game.settings.format(gemStorage);
	document.getElementById("gemNextStorage").innerHTML = Game.settings.format(gemNextStorage);
	document.getElementById("gemStorageCost").innerHTML = Game.settings.format(gemStorage);
	document.getElementById("gemStorageMetalCost").innerHTML = Game.settings.format(gemStorage/2.5);
	document.getElementById("charcoalStorage").innerHTML = Game.settings.format(charcoalStorage);
	document.getElementById("charcoalNextStorage").innerHTML = Game.settings.format(charcoalNextStorage);
	document.getElementById("charcoalStorageCost").innerHTML = Game.settings.format(charcoalStorage);
	document.getElementById("charcoalStorageMetalCost").innerHTML = Game.settings.format(charcoalStorage/2.5);
	document.getElementById("woodStorage").innerHTML = Game.settings.format(woodStorage);
	document.getElementById("woodNextStorage").innerHTML = Game.settings.format(woodNextStorage);
	document.getElementById("woodStorageCost").innerHTML = Game.settings.format(woodStorage);
	document.getElementById("woodStorageMetalCost").innerHTML = Game.settings.format(woodStorage/2.5);
	document.getElementById("spaceMetalStorage").innerHTML = Game.settings.format(spaceMetalStorage);
	document.getElementById("spaceMetalNextStorage").innerHTML = Game.settings.format(spaceMetalNextStorage);
	document.getElementById("spaceMetalStorageCost").innerHTML = Game.settings.format(spaceMetalStorage);
	document.getElementById("spaceMetalStorageMetalCost").innerHTML = Game.settings.format(spaceMetalStorage*4);
	document.getElementById("methaneStorage").innerHTML = Game.settings.format(methaneStorage);
	document.getElementById("methaneNextStorage").innerHTML = Game.settings.format(methaneNextStorage);
	document.getElementById("methaneStorageCost").innerHTML = Game.settings.format(methaneStorage);
	document.getElementById("methaneStorageSpaceMetalCost").innerHTML = Game.settings.format(methaneStorage/2.5);
	document.getElementById("titaniumStorage").innerHTML = Game.settings.format(titaniumStorage);
	document.getElementById("titaniumNextStorage").innerHTML = Game.settings.format(titaniumNextStorage);
	document.getElementById("titaniumStorageCost").innerHTML = Game.settings.format(titaniumStorage);
	document.getElementById("titaniumStorageSpaceMetalCost").innerHTML = Game.settings.format(titaniumStorage/2.5);
	document.getElementById("goldStorage").innerHTML = Game.settings.format(goldStorage);
	document.getElementById("goldNextStorage").innerHTML = Game.settings.format(goldNextStorage);
	document.getElementById("goldStorageCost").innerHTML = Game.settings.format(goldStorage);
	document.getElementById("goldStorageSpaceMetalCost").innerHTML = Game.settings.format(goldStorage/2.5);
	document.getElementById("silverStorage").innerHTML = Game.settings.format(silverStorage);
	document.getElementById("silverNextStorage").innerHTML = Game.settings.format(silverNextStorage);
	document.getElementById("silverStorageCost").innerHTML = Game.settings.format(silverStorage);
	document.getElementById("silverStorageSpaceMetalCost").innerHTML = Game.settings.format(silverStorage/2.5);
	document.getElementById("siliconStorage").innerHTML = Game.settings.format(siliconStorage);
	document.getElementById("siliconNextStorage").innerHTML = Game.settings.format(siliconNextStorage);
	document.getElementById("siliconStorageCost").innerHTML = Game.settings.format(siliconStorage);
	document.getElementById("siliconStorageSpaceMetalCost").innerHTML = Game.settings.format(siliconStorage/2.5);
	document.getElementById("lavaStorage").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = Game.settings.format(lavaNextStorage);
	document.getElementById("lavaStorageCost").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = Game.settings.format(lavaStorage/2.5);
	document.getElementById("hydrogenStorage").innerHTML = Game.settings.format(hydrogenStorage);
	document.getElementById("hydrogenNextStorage").innerHTML = Game.settings.format(hydrogenNextStorage);
	document.getElementById("hydrogenStorageCost").innerHTML = Game.settings.format(hydrogenStorage);
	document.getElementById("hydrogenStorageSpaceMetalCost").innerHTML = Game.settings.format(hydrogenStorage/2.5);
	document.getElementById("heliumStorage").innerHTML = Game.settings.format(heliumStorage);
	document.getElementById("heliumNextStorage").innerHTML = Game.settings.format(heliumNextStorage);
	document.getElementById("heliumStorageCost").innerHTML = Game.settings.format(heliumStorage);
	document.getElementById("heliumStorageSpaceMetalCost").innerHTML = Game.settings.format(heliumStorage/2.5);
	document.getElementById("iceStorage").innerHTML = Game.settings.format(iceStorage);
	document.getElementById("iceNextStorage").innerHTML = Game.settings.format(iceNextStorage);
	document.getElementById("iceStorageCost").innerHTML = Game.settings.format(iceStorage);
	document.getElementById("iceStorageSpaceMetalCost").innerHTML = Game.settings.format(iceStorage/2.5);
	document.getElementById("meteoriteStorage").innerHTML = Game.settings.format(meteoriteStorage);
	document.getElementById("meteoriteNextStorage").innerHTML = Game.settings.format(meteoriteNextStorage);
	document.getElementById("meteoriteStorageCost").innerHTML = Game.settings.format(meteoriteStorage);
	document.getElementById("meteoriteStorageSpaceMetalCost").innerHTML = Game.settings.format(meteoriteStorage*4);
	document.getElementById("lava").innerHTML = Game.settings.format(lava);
	document.getElementById("lavaStorage").innerHTML = Game.settings.format(lavaStorage);
	document.getElementById("lavaNextStorage").innerHTML = Game.settings.format(lavaNextStorage);
	document.getElementById("lavaStorageSpaceMetalCost").innerHTML = Game.settings.format(lavaNextStorage/2.5);
	document.getElementById("heater").innerHTML = heater;
	document.getElementById("heaterSpaceMetalCost").innerHTML = Game.settings.format(heaterSpaceMetalCost);
	document.getElementById("heaterGemCost").innerHTML = Game.settings.format(heaterGemCost);
	document.getElementById("heaterSiliconCost").innerHTML = Game.settings.format(heaterSiliconCost);
	document.getElementById("plasmatic").innerHTML = plasmatic;
	document.getElementById("plasmaticSpaceMetalCost").innerHTML = Game.settings.format(plasmaticSpaceMetalCost);
	document.getElementById("plasmaticSiliconCost").innerHTML = Game.settings.format(plasmaticSiliconCost);
	document.getElementById("plasmaticMeteoriteCost").innerHTML = Game.settings.format(plasmaticMeteoriteCost);
	document.getElementById("battery").innerHTML = battery;
	document.getElementById("batteryMetalCost").innerHTML = Game.settings.format(batteryMetalCost);
	document.getElementById("batteryGemCost").innerHTML = Game.settings.format(batteryGemCost);
	document.getElementById("batterySpaceMetalCost").innerHTML = Game.settings.format(batterySpaceMetalCost);
	document.getElementById("batteryT2").innerHTML = batteryT2;
	document.getElementById("batteryT2MetalCost").innerHTML = Game.settings.format(batteryT2MetalCost);
	document.getElementById("batteryT2GemCost").innerHTML = Game.settings.format(batteryT2GemCost);
	document.getElementById("batteryT2SpaceMetalCost").innerHTML = Game.settings.format(batteryT2SpaceMetalCost);
	document.getElementById("charcoalEngine").innerHTML = charcoalEngine;
	document.getElementById("charcoalEngineMetalCost").innerHTML = Game.settings.format(charcoalEngineMetalCost);
	document.getElementById("charcoalEngineGemCost").innerHTML = Game.settings.format(charcoalEngineGemCost);
	document.getElementById("charcoalEngineOutput").innerHTML = charcoalEngineOutput;
	document.getElementById("solarPanel").innerHTML = solarPanel;
	document.getElementById("solarPanelMetalCost").innerHTML = Game.settings.format(solarPanelMetalCost);
	document.getElementById("solarPanelGemCost").innerHTML = Game.settings.format(solarPanelGemCost);
	document.getElementById("solarPanelOutput").innerHTML = solarPanelOutput;
	document.getElementById("methaneStation").innerHTML = methaneStation;
	document.getElementById("methaneStationSpaceMetalCost").innerHTML = Game.settings.format(methaneStationSpaceMetalCost);
	document.getElementById("methaneStationTitaniumCost").innerHTML = Game.settings.format(methaneStationTitaniumCost);
	document.getElementById("nuclearStation").innerHTML = nuclearStation;
	document.getElementById("nuclearStationSpaceMetalCost").innerHTML = Game.settings.format(nuclearStationSpaceMetalCost);
	document.getElementById("nuclearStationTitaniumCost").innerHTML = Game.settings.format(nuclearStationTitaniumCost);
	document.getElementById("magmatic").innerHTML = magmatic;
	document.getElementById("magmaticSpaceMetalCost").innerHTML = Game.settings.format(magmaticSpaceMetalCost);
	document.getElementById("magmaticGemCost").innerHTML = Game.settings.format(magmaticGemCost);
	document.getElementById("magmaticSilverCost").innerHTML = Game.settings.format(magmaticSilverCost);
	document.getElementById("fusionReactor").innerHTML = fusionReactor;
	document.getElementById("fusionReactorSpaceMetalCost").innerHTML = Game.settings.format(fusionReactorSpaceMetalCost);
	document.getElementById("fusionReactorTitaniumCost").innerHTML = Game.settings.format(fusionReactorTitaniumCost);
	document.getElementById("fusionReactorSiliconCost").innerHTML = Game.settings.format(fusionReactorSiliconCost);
	document.getElementById("pump").innerHTML = pump;
	document.getElementById("pumpMetalCost").innerHTML = Game.settings.format(pumpMetalCost);
	document.getElementById("pumpGemCost").innerHTML = Game.settings.format(pumpGemCost);
	document.getElementById("pumpjack").innerHTML = pumpjack;
	document.getElementById("pumpjackOilCost").innerHTML = Game.settings.format(pumpjackOilCost);
	document.getElementById("pumpjackGemCost").innerHTML = Game.settings.format(pumpjackGemCost);
	document.getElementById("pumpjackMetalCost").innerHTML = Game.settings.format(pumpjackMetalCost);
	document.getElementById("pumpjackOutput").innerHTML = Game.settings.format(pumpjackOutput);
	document.getElementById("oilField").innerHTML = oilField;
	document.getElementById("oilFieldTitaniumCost").innerHTML = Game.settings.format(oilFieldTitaniumCost);
	document.getElementById("oilFieldSpaceMetalCost").innerHTML = Game.settings.format(oilFieldSpaceMetalCost);
	document.getElementById("oilFieldSiliconCost").innerHTML = Game.settings.format(oilFieldSiliconCost);
	document.getElementById("oilRig").innerHTML = oilRig;
	document.getElementById("oilRigTitaniumCost").innerHTML = Game.settings.format(oilRigTitaniumCost);
	document.getElementById("oilRigSpaceMetalCost").innerHTML = Game.settings.format(oilRigSpaceMetalCost);
	document.getElementById("oilRigMeteoriteCost").innerHTML = Game.settings.format(oilRigMeteoriteCost);
	document.getElementById("miner").innerHTML = miner;
	document.getElementById("minerMetalCost").innerHTML = Game.settings.format(minerMetalCost);
	document.getElementById("minerWoodCost").innerHTML = Game.settings.format(minerWoodCost);
	document.getElementById("heavyDrill").innerHTML = heavyDrill;
	document.getElementById("heavyDrillMetalCost").innerHTML = Game.settings.format(heavyDrillMetalCost);
	document.getElementById("heavyDrillGemCost").innerHTML = Game.settings.format(heavyDrillGemCost);
	document.getElementById("heavyDrillOilCost").innerHTML = Game.settings.format(heavyDrillOilCost);
	document.getElementById("heavyDrillOutput").innerHTML = Game.settings.format(heavyDrillOutput);
	document.getElementById("gigaDrill").innerHTML = gigaDrill;
	document.getElementById("gigaDrillSpaceMetalCost").innerHTML = Game.settings.format(gigaDrillSpaceMetalCost);
	document.getElementById("gigaDrillGemCost").innerHTML = Game.settings.format(gigaDrillGemCost);
	document.getElementById("gigaDrillSiliconCost").innerHTML = Game.settings.format(gigaDrillSiliconCost);
	document.getElementById("quantumDrill").innerHTML = quantumDrill;
	document.getElementById("quantumDrillSpaceMetalCost").innerHTML = Game.settings.format(quantumDrillSpaceMetalCost);
	document.getElementById("quantumDrillGoldCost").innerHTML = Game.settings.format(quantumDrillGoldCost);
	document.getElementById("quantumDrillMeteoriteCost").innerHTML = Game.settings.format(quantumDrillMeteoriteCost);
	document.getElementById("gemMiner").innerHTML = gemMiner;
	document.getElementById("gemMinerMetalCost").innerHTML = Game.settings.format(gemMinerMetalCost);
	document.getElementById("gemMinerGemCost").innerHTML = Game.settings.format(gemMinerGemCost);
	document.getElementById("advancedDrill").innerHTML = advancedDrill;
	document.getElementById("advancedDrillMetalCost").innerHTML = Game.settings.format(advancedDrillMetalCost);
	document.getElementById("advancedDrillGemCost").innerHTML = Game.settings.format(advancedDrillGemCost);
	document.getElementById("advancedDrillOilCost").innerHTML = Game.settings.format(advancedDrillOilCost);
	document.getElementById("advancedDrillOutput").innerHTML = Game.settings.format(advancedDrillOutput);
	document.getElementById("diamondDrill").innerHTML = diamondDrill;
	document.getElementById("diamondDrillSpaceMetalCost").innerHTML = Game.settings.format(diamondDrillSpaceMetalCost);
	document.getElementById("diamondDrillGemCost").innerHTML = Game.settings.format(diamondDrillGemCost);
	document.getElementById("diamondDrillSiliconCost").innerHTML = Game.settings.format(diamondDrillSiliconCost);
	document.getElementById("carbyneDrill").innerHTML = carbyneDrill;
	document.getElementById("carbyneDrillSpaceMetalCost").innerHTML = Game.settings.format(carbyneDrillSpaceMetalCost);
	document.getElementById("carbyneDrillGemCost").innerHTML = Game.settings.format(carbyneDrillGemCost);
	document.getElementById("carbyneDrillMeteoriteCost").innerHTML = Game.settings.format(carbyneDrillMeteoriteCost);
	document.getElementById("woodburner").innerHTML = woodburner;
	document.getElementById("woodburnerMetalCost").innerHTML = Game.settings.format(woodburnerMetalCost);
	document.getElementById("woodburnerWoodCost").innerHTML = Game.settings.format(woodburnerWoodCost);
	document.getElementById("furnace").innerHTML = furnace;
	document.getElementById("furnaceMetalCost").innerHTML = Game.settings.format(furnaceMetalCost);
	document.getElementById("furnaceWoodCost").innerHTML = Game.settings.format(furnaceWoodCost);
	document.getElementById("furnaceOilCost").innerHTML = Game.settings.format(furnaceOilCost);
	document.getElementById("furnaceOutput").innerHTML = furnaceOutput;
	document.getElementById("furnaceWoodInput").innerHTML = furnaceWoodInput;
	document.getElementById("kiln").innerHTML = Game.settings.format(kiln);
	document.getElementById("kilnSpaceMetalCost").innerHTML = Game.settings.format(kilnSpaceMetalCost);
	document.getElementById("kilnGemCost").innerHTML = Game.settings.format(kilnGemCost);
	document.getElementById("kilnSiliconCost").innerHTML = Game.settings.format(kilnSiliconCost);
	document.getElementById("fryer").innerHTML = Game.settings.format(fryer);
	document.getElementById("fryerSpaceMetalCost").innerHTML = Game.settings.format(fryerSpaceMetalCost);
	document.getElementById("fryerLavaCost").innerHTML = Game.settings.format(fryerLavaCost);
	document.getElementById("fryerMeteoriteCost").innerHTML = Game.settings.format(fryerMeteoriteCost);
	document.getElementById("woodcutter").innerHTML = woodcutter;
	document.getElementById("woodcutterMetalCost").innerHTML = Game.settings.format(woodcutterMetalCost);
	document.getElementById("woodcutterWoodCost").innerHTML = Game.settings.format(woodcutterWoodCost);
	document.getElementById("laserCutter").innerHTML = laserCutter;
	document.getElementById("laserCutterMetalCost").innerHTML = Game.settings.format(laserCutterMetalCost);
	document.getElementById("laserCutterGemCost").innerHTML = Game.settings.format(laserCutterGemCost);
	document.getElementById("laserCutterOilCost").innerHTML = Game.settings.format(laserCutterOilCost);
	document.getElementById("laserCutterOutput").innerHTML = Game.settings.format(laserCutterOutput);
	document.getElementById("deforester").innerHTML = deforester;
	document.getElementById("deforesterSpaceMetalCost").innerHTML = Game.settings.format(deforesterSpaceMetalCost);
	document.getElementById("deforesterTitaniumCost").innerHTML = Game.settings.format(deforesterTitaniumCost);
	document.getElementById("deforesterSiliconCost").innerHTML = Game.settings.format(deforesterSiliconCost);
	document.getElementById("infuser").innerHTML = infuser;
	document.getElementById("infuserSpaceMetalCost").innerHTML = Game.settings.format(infuserSpaceMetalCost);
	document.getElementById("infuserOilCost").innerHTML = Game.settings.format(infuserOilCost);
	document.getElementById("infuserMeteoriteCost").innerHTML = Game.settings.format(infuserMeteoriteCost);
	document.getElementById("moonWorker").innerHTML = moonWorker;
	document.getElementById("moonWorkerGemCost").innerHTML = Game.settings.format(moonWorkerGemCost);
	document.getElementById("moonDrill").innerHTML = moonDrill;
	document.getElementById("moonDrillMetalCost").innerHTML = Game.settings.format(moonDrillMetalCost);
	document.getElementById("moonDrillGemCost").innerHTML = Game.settings.format(moonDrillGemCost);
	document.getElementById("moonDrillOilCost").innerHTML = Game.settings.format(moonDrillOilCost);
	document.getElementById("moonQuarry").innerHTML = moonQuarry;
	document.getElementById("moonQuarrySpaceMetalCost").innerHTML = Game.settings.format(moonQuarrySpaceMetalCost);
	document.getElementById("moonQuarryGemCost").innerHTML = Game.settings.format(moonQuarryGemCost);
	document.getElementById("moonQuarrySiliconCost").innerHTML = Game.settings.format(moonQuarrySiliconCost);
	document.getElementById("planetExcavator").innerHTML = planetExcavator;
	document.getElementById("planetExcavatorTitaniumCost").innerHTML = Game.settings.format(planetExcavatorTitaniumCost);
	document.getElementById("planetExcavatorIceCost").innerHTML = Game.settings.format(planetExcavatorIceCost);
	document.getElementById("planetExcavatorMeteoriteCost").innerHTML = Game.settings.format(planetExcavatorMeteoriteCost);
	document.getElementById("vacuum").innerHTML = vacuum;
	document.getElementById("vacuumSpaceMetalCost").innerHTML = Game.settings.format(vacuumSpaceMetalCost);
	document.getElementById("vacuumGemCost").innerHTML = Game.settings.format(vacuumGemCost);
	document.getElementById("suctionExcavator").innerHTML = suctionExcavator;
	document.getElementById("suctionExcavatorSpaceMetalCost").innerHTML = Game.settings.format(suctionExcavatorSpaceMetalCost);
	document.getElementById("suctionExcavatorGemCost").innerHTML = Game.settings.format(suctionExcavatorGemCost);
	document.getElementById("suctionExcavatorOilCost").innerHTML = Game.settings.format(suctionExcavatorOilCost);
	document.getElementById("spaceCow").innerHTML = spaceCow;
	document.getElementById("spaceCowTitaniumCost").innerHTML = Game.settings.format(spaceCowTitaniumCost);
	document.getElementById("spaceCowSpaceMetalCost").innerHTML = Game.settings.format(spaceCowSpaceMetalCost);
	document.getElementById("spaceCowSiliconCost").innerHTML = Game.settings.format(spaceCowSiliconCost);
	document.getElementById("vent").innerHTML = vent;
	document.getElementById("ventHeliumCost").innerHTML = Game.settings.format(ventHeliumCost);
	document.getElementById("ventSpaceMetalCost").innerHTML = Game.settings.format(ventSpaceMetalCost);
	document.getElementById("ventMeteoriteCost").innerHTML = Game.settings.format(ventMeteoriteCost);
	document.getElementById("explorer").innerHTML = explorer;
	document.getElementById("explorerGemCost").innerHTML = Game.settings.format(explorerGemCost);
	document.getElementById("spaceMetalDrill").innerHTML = spaceMetalDrill;
	document.getElementById("spaceMetalDrillSpaceMetalCost").innerHTML = Game.settings.format(spaceMetalDrillSpaceMetalCost);
	document.getElementById("spaceMetalDrillGemCost").innerHTML = Game.settings.format(spaceMetalDrillGemCost);
	document.getElementById("spaceMetalDrillOilCost").innerHTML = Game.settings.format(spaceMetalDrillOilCost);
	document.getElementById("pentaDrill").innerHTML = pentaDrill;
	document.getElementById("pentaDrillSpaceMetalCost").innerHTML = Game.settings.format(pentaDrillSpaceMetalCost);
	document.getElementById("pentaDrillGemCost").innerHTML = Game.settings.format(pentaDrillGemCost);
	document.getElementById("pentaDrillSiliconCost").innerHTML = Game.settings.format(pentaDrillSiliconCost);
	document.getElementById("titanDrill").innerHTML = titanDrill;
	document.getElementById("titanDrillSpaceMetalCost").innerHTML = Game.settings.format(titanDrillSpaceMetalCost);
	document.getElementById("titanDrillGoldCost").innerHTML = Game.settings.format(titanDrillGoldCost);
	document.getElementById("titanDrillMeteoriteCost").innerHTML = Game.settings.format(titanDrillMeteoriteCost);
	document.getElementById("droid").innerHTML = droid;
	document.getElementById("droidSpaceMetalCost").innerHTML = Game.settings.format(droidSpaceMetalCost);
	document.getElementById("droidMethaneCost").innerHTML = Game.settings.format(droidMethaneCost);
	document.getElementById("destroyer").innerHTML = destroyer;
	document.getElementById("destroyerSpaceMetalCost").innerHTML = Game.settings.format(destroyerSpaceMetalCost);
	document.getElementById("destroyerGemCost").innerHTML = Game.settings.format(destroyerGemCost);
	document.getElementById("destroyerOilCost").innerHTML = Game.settings.format(destroyerOilCost);
	document.getElementById("deathStar").innerHTML = deathStar;
	document.getElementById("deathStarSpaceMetalCost").innerHTML = Game.settings.format(deathStarSpaceMetalCost);
	document.getElementById("deathStarSilverCost").innerHTML = Game.settings.format(deathStarSilverCost);
	document.getElementById("deathStarSiliconCost").innerHTML = Game.settings.format(deathStarSiliconCost);
	document.getElementById("actuator").innerHTML = actuator;
	document.getElementById("actuatorSpaceMetalCost").innerHTML = Game.settings.format(actuatorSpaceMetalCost);
	document.getElementById("actuatorHeliumCost").innerHTML = Game.settings.format(actuatorHeliumCost);
	document.getElementById("actuatorMeteoriteCost").innerHTML = Game.settings.format(actuatorMeteoriteCost);
	document.getElementById("scout").innerHTML = scout;
	document.getElementById("scoutSpaceMetalCost").innerHTML = Game.settings.format(scoutSpaceMetalCost);
	document.getElementById("scoutTitaniumCost").innerHTML = Game.settings.format(scoutTitaniumCost);
	document.getElementById("spaceLaser").innerHTML = spaceLaser;
	document.getElementById("spaceLaserSpaceMetalCost").innerHTML = Game.settings.format(spaceLaserSpaceMetalCost);
	document.getElementById("spaceLaserGemCost").innerHTML = Game.settings.format(spaceLaserGemCost);
	document.getElementById("spaceLaserOilCost").innerHTML = Game.settings.format(spaceLaserOilCost);
	document.getElementById("bertha").innerHTML = bertha;
	document.getElementById("berthaTitaniumCost").innerHTML = Game.settings.format(berthaTitaniumCost);
	document.getElementById("berthaSpaceMetalCost").innerHTML = Game.settings.format(berthaSpaceMetalCost);
	document.getElementById("berthaSiliconCost").innerHTML = Game.settings.format(berthaSiliconCost);
	document.getElementById("cannon").innerHTML = cannon;
	document.getElementById("cannonOilCost").innerHTML = Game.settings.format(cannonOilCost);
	document.getElementById("cannonSpaceMetalCost").innerHTML = Game.settings.format(cannonSpaceMetalCost);
	document.getElementById("cannonMeteoriteCost").innerHTML = Game.settings.format(cannonMeteoriteCost);
	document.getElementById("blowtorch").innerHTML = blowtorch;
	document.getElementById("blowtorchSpaceMetalCost").innerHTML = Game.settings.format(blowtorchSpaceMetalCost);
	document.getElementById("blowtorchTitaniumCost").innerHTML = Game.settings.format(blowtorchTitaniumCost);
	document.getElementById("scorcher").innerHTML = scorcher;
	document.getElementById("scorcherSpaceMetalCost").innerHTML = Game.settings.format(scorcherSpaceMetalCost);
	document.getElementById("scorcherGemCost").innerHTML = Game.settings.format(scorcherGemCost);
	document.getElementById("scorcherOilCost").innerHTML = Game.settings.format(scorcherOilCost);
	document.getElementById("annihilator").innerHTML = Game.settings.format(annihilator);
	document.getElementById("annihilatorSpaceMetalCost").innerHTML = Game.settings.format(annihilatorSpaceMetalCost);
	document.getElementById("annihilatorGemCost").innerHTML = Game.settings.format(annihilatorGemCost);
	document.getElementById("annihilatorSilverCost").innerHTML = Game.settings.format(annihilatorSilverCost);
	document.getElementById("desert").innerHTML = Game.settings.format(desert);
	document.getElementById("desertSpaceMetalCost").innerHTML = Game.settings.format(desertSpaceMetalCost);
	document.getElementById("desertSiliconCost").innerHTML = Game.settings.format(desertSiliconCost);
	document.getElementById("desertMeteoriteCost").innerHTML = Game.settings.format(desertMeteoriteCost);
	document.getElementById("lab").innerHTML = lab;
	document.getElementById("labWoodCost").innerHTML = Game.settings.format(labWoodCost);
	document.getElementById("labGemCost").innerHTML = Game.settings.format(labGemCost);
	document.getElementById("labMetalCost").innerHTML = Game.settings.format(labMetalCost);
	document.getElementById("labT2").innerHTML = labT2;
	document.getElementById("labT2WoodCost").innerHTML = Game.settings.format(labT2WoodCost);
	document.getElementById("labT2GemCost").innerHTML = Game.settings.format(labT2GemCost);
	document.getElementById("labT2MetalCost").innerHTML = Game.settings.format(labT2MetalCost);
	document.getElementById("labT3").innerHTML = labT3;
	document.getElementById("labT3WoodCost").innerHTML = Game.settings.format(labT3WoodCost);
	document.getElementById("labT3GemCost").innerHTML = Game.settings.format(labT3GemCost);
	document.getElementById("labT3MetalCost").innerHTML = Game.settings.format(labT3MetalCost);
	document.getElementById("chemicalPlant").innerHTML = chemicalPlant;
	document.getElementById("chemicalPlantMetalCost").innerHTML = Game.settings.format(chemicalPlantMetalCost);
	document.getElementById("chemicalPlantGemCost").innerHTML = Game.settings.format(chemicalPlantGemCost);
	document.getElementById("chemicalPlantOilCost").innerHTML = Game.settings.format(chemicalPlantOilCost);
	document.getElementById("grinder").innerHTML = grinder;
	document.getElementById("grinderTitaniumCost").innerHTML = Game.settings.format(grinderTitaniumCost);
	document.getElementById("grinderSpaceMetalCost").innerHTML = Game.settings.format(grinderSpaceMetalCost);
	document.getElementById("grinderGoldCost").innerHTML = Game.settings.format(grinderGoldCost);
	document.getElementById("cubic").innerHTML = cubic;
	document.getElementById("cubicUraniumCost").innerHTML = Game.settings.format(cubicUraniumCost);
	document.getElementById("cubicSpaceMetalCost").innerHTML = Game.settings.format(cubicSpaceMetalCost);
	document.getElementById("cubicOilCost").innerHTML = Game.settings.format(cubicOilCost);
	document.getElementById("enricher").innerHTML = enricher;
	document.getElementById("enricherTitaniumCost").innerHTML = Game.settings.format(enricherTitaniumCost);
	document.getElementById("enricherSpaceMetalCost").innerHTML = Game.settings.format(enricherSpaceMetalCost);
	document.getElementById("enricherSiliconCost").innerHTML = Game.settings.format(enricherSiliconCost);
	document.getElementById("recycler").innerHTML = recycler;
	document.getElementById("recyclerMethaneCost").innerHTML = Game.settings.format(recyclerMethaneCost);
	document.getElementById("recyclerSpaceMetalCost").innerHTML = Game.settings.format(recyclerSpaceMetalCost);
	document.getElementById("recyclerMeteoriteCost").innerHTML = Game.settings.format(recyclerMeteoriteCost);
	document.getElementById("crucible").innerHTML = crucible;
	document.getElementById("crucibleGemCost").innerHTML = Game.settings.format(crucibleGemCost);
	document.getElementById("crucibleSpaceMetalCost").innerHTML = Game.settings.format(crucibleSpaceMetalCost);
	document.getElementById("extractor").innerHTML = extractor;
	document.getElementById("extractorTitaniumCost").innerHTML = Game.settings.format(extractorTitaniumCost);
	document.getElementById("extractorSpaceMetalCost").innerHTML = Game.settings.format(extractorSpaceMetalCost);
	document.getElementById("extractorSiliconCost").innerHTML = Game.settings.format(extractorSiliconCost);
	document.getElementById("extruder").innerHTML = extruder;
	document.getElementById("extruderTitaniumCost").innerHTML = Game.settings.format(extruderTitaniumCost);
	document.getElementById("extruderSpaceMetalCost").innerHTML = Game.settings.format(extruderSpaceMetalCost);
	document.getElementById("extruderSiliconCost").innerHTML = Game.settings.format(extruderSiliconCost);
	document.getElementById("veluptuator").innerHTML = veluptuator;
	document.getElementById("veluptuatorGoldCost").innerHTML = Game.settings.format(veluptuatorGoldCost);
	document.getElementById("veluptuatorSpaceMetalCost").innerHTML = Game.settings.format(veluptuatorSpaceMetalCost);
	document.getElementById("veluptuatorMeteoriteCost").innerHTML = Game.settings.format(veluptuatorMeteoriteCost);
	document.getElementById("collector").innerHTML = Game.settings.format(collector);
	document.getElementById("collectorSpaceMetalCost").innerHTML = Game.settings.format(collectorSpaceMetalCost);
	document.getElementById("collectorTitaniumCost").innerHTML = Game.settings.format(collectorTitaniumCost);
	document.getElementById("magnet").innerHTML = Game.settings.format(magnet);
	document.getElementById("magnetSpaceMetalCost").innerHTML = Game.settings.format(magnetSpaceMetalCost);
	document.getElementById("magnetTitaniumCost").innerHTML = Game.settings.format(magnetTitaniumCost);
	document.getElementById("magnetGoldCost").innerHTML = Game.settings.format(magnetGoldCost);
	document.getElementById("eCell").innerHTML = Game.settings.format(eCell);
	document.getElementById("eCellSilverCost").innerHTML = Game.settings.format(eCellSilverCost);
	document.getElementById("eCellGoldCost").innerHTML = Game.settings.format(eCellGoldCost);
	document.getElementById("eCellSiliconCost").innerHTML = Game.settings.format(eCellSiliconCost);
	document.getElementById("hindenburg").innerHTML = Game.settings.format(hindenburg);
	document.getElementById("hindenburgSpaceMetalCost").innerHTML = Game.settings.format(hindenburgSpaceMetalCost);
	document.getElementById("hindenburgMethaneCost").innerHTML = Game.settings.format(hindenburgMethaneCost);
	document.getElementById("hindenburgMeteoriteCost").innerHTML = Game.settings.format(hindenburgMeteoriteCost);
	document.getElementById("drone").innerHTML = Game.settings.format(drone);
	document.getElementById("droneSpaceMetalCost").innerHTML = Game.settings.format(droneSpaceMetalCost);
	document.getElementById("droneSiliconCost").innerHTML = Game.settings.format(droneSiliconCost);
	document.getElementById("tanker").innerHTML = Game.settings.format(tanker);
	document.getElementById("tankerSpaceMetalCost").innerHTML = Game.settings.format(tankerSpaceMetalCost);
	document.getElementById("tankerTitaniumCost").innerHTML = Game.settings.format(tankerTitaniumCost);
	document.getElementById("tankerSiliconCost").innerHTML = Game.settings.format(tankerSiliconCost);
	document.getElementById("compressor").innerHTML = Game.settings.format(compressor);
	document.getElementById("compressorSpaceMetalCost").innerHTML = Game.settings.format(compressorSpaceMetalCost);
	document.getElementById("compressorTitaniumCost").innerHTML = Game.settings.format(compressorTitaniumCost);
	document.getElementById("compressorSiliconCost").innerHTML = Game.settings.format(compressorSiliconCost);
	document.getElementById("skimmer").innerHTML = Game.settings.format(skimmer);
	document.getElementById("skimmerSpaceMetalCost").innerHTML = Game.settings.format(skimmerSpaceMetalCost);
	document.getElementById("skimmerTitaniumCost").innerHTML = Game.settings.format(skimmerTitaniumCost);
	document.getElementById("skimmerMeteoriteCost").innerHTML = Game.settings.format(skimmerMeteoriteCost);
	document.getElementById("icePick").innerHTML = Game.settings.format(icePick);
	document.getElementById("icePickSpaceMetalCost").innerHTML = Game.settings.format(icePickSpaceMetalCost);
	document.getElementById("icePickGemCost").innerHTML = Game.settings.format(icePickGemCost);
	document.getElementById("iceDrill").innerHTML = Game.settings.format(iceDrill);
	document.getElementById("iceDrillSpaceMetalCost").innerHTML = Game.settings.format(iceDrillSpaceMetalCost);
	document.getElementById("iceDrillTitaniumCost").innerHTML = Game.settings.format(iceDrillTitaniumCost);
	document.getElementById("iceDrillSiliconCost").innerHTML = Game.settings.format(iceDrillSiliconCost);
	document.getElementById("freezer").innerHTML = Game.settings.format(freezer);
	document.getElementById("freezerSpaceMetalCost").innerHTML = Game.settings.format(freezerSpaceMetalCost);
	document.getElementById("freezerTitaniumCost").innerHTML = Game.settings.format(freezerTitaniumCost);
	document.getElementById("freezerSiliconCost").innerHTML = Game.settings.format(freezerSiliconCost);
	document.getElementById("mrFreeze").innerHTML = Game.settings.format(mrFreeze);
	document.getElementById("mrFreezeSpaceMetalCost").innerHTML = Game.settings.format(mrFreezeSpaceMetalCost);
	document.getElementById("mrFreezeHeliumCost").innerHTML = Game.settings.format(mrFreezeHeliumCost);
	document.getElementById("mrFreezeMeteoriteCost").innerHTML = Game.settings.format(mrFreezeMeteoriteCost);
	document.getElementById("printer").innerHTML = Game.settings.format(printer);
	document.getElementById("printerSpaceMetalCost").innerHTML = Game.settings.format(printerSpaceMetalCost);
	document.getElementById("printerSiliconCost").innerHTML = Game.settings.format(printerSiliconCost);
	document.getElementById("web").innerHTML = Game.settings.format(web);
	document.getElementById("webSpaceMetalCost").innerHTML = Game.settings.format(webSpaceMetalCost);
	document.getElementById("webUraniumCost").innerHTML = Game.settings.format(webUraniumCost);
	document.getElementById("webSiliconCost").innerHTML = Game.settings.format(webSiliconCost);
	document.getElementById("dyson").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonPieces").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonPieces2").innerHTML = Game.settings.format(dyson);
	document.getElementById("dysonTitaniumCost").innerHTML = Game.settings.format(dysonTitaniumCost);
	document.getElementById("dysonGoldCost").innerHTML = Game.settings.format(dysonGoldCost);
	document.getElementById("dysonSiliconCost").innerHTML = Game.settings.format(dysonSiliconCost);
	document.getElementById("dysonMeteoriteCost").innerHTML = Game.settings.format(dysonMeteoriteCost);
	document.getElementById("dysonIceCost").innerHTML = Game.settings.format(dysonIceCost);
	document.getElementById("swarm").innerHTML = Game.settings.format(swarm);
	document.getElementById("sphere").innerHTML = Game.settings.format(sphere);
}

function checkRedCost(){
	Game.settings.turnRed(plasmaps, 0, "plasmaps");
	Game.settings.turnRed(energyps, 0, "energyps");
	Game.settings.turnRed(uraniumps - nuclearStation*7, 0, "uraniumps");
	if(chemicalPlantToggled === true){
		Game.settings.turnRed(oilps - chemicalPlant*20, 0, "oilps");
	}
	else{
		Game.settings.turnRed(oilps, 0, "oilps");
	}
	if(chemicalPlantToggled === true){
		if(charcoalToggled === true){
			Game.settings.turnRed(charcoalps - charcoalEngine - chemicalPlant*20, 0, "charcoalps");
		}
		else{
			Game.settings.turnRed(0 - charcoalEngine - chemicalPlant*20, 0, "charcoalps");
		}
	}
	else{
		if(charcoalToggled === true){
			Game.settings.turnRed(charcoalps - charcoalEngine, 0, "charcoalps");
		}
		else{
			Game.settings.turnRed(0 - charcoalEngine, 0, "charcoalps");
		}
	}
	if(charcoalToggled === true && charcoal < charcoalStorage){
		Game.settings.turnRed(woodps - (woodburner*2) - (furnace*furnaceWoodInput) - (kiln*56) - (fryer*148), 0, "woodps");
	}
	else{
		Game.settings.turnRed(woodps, 0, "woodps");
	}
	Game.settings.turnRed(spaceMetalps, 0, "spaceMetalps");
	Game.settings.turnRed(methaneps - methaneStation*6, 0, "methaneps");
	Game.settings.turnRed(lavaps - magmatic*11, 0, "lavaps");
	if(heaterToggled === true){
		Game.settings.turnRed(hydrogenps - fusionReactor*10 - heater*10, 0, "hydrogenps");
	}
	else{
		Game.settings.turnRed(hydrogenps - fusionReactor*10, 0, "hydrogenps");
	}
	if(plasmaticToggled === true){
		Game.settings.turnRed(heliumps - fusionReactor*10 - plasmatic*80, 0, "heliumps");
	}
	else{
		Game.settings.turnRed(heliumps - fusionReactor*10, 0, "heliumps");
	}
	

	Game.settings.turnRed(wood, 2, "manualCharcoalCost");
	Game.settings.turnRed(energy, 1000, "manualPlasmaEnergyCost");
	Game.settings.turnRed(hydrogen, 10, "manualPlasmaHydrogenCost");

	Game.settings.turnRed(uranium, uraniumStorage, "uraniumStorageCost");
	Game.settings.turnRed(spaceMetal, uraniumStorage/2.5, "uraniumStorageSpaceMetalCost");
	
	Game.settings.turnRed(oil, oilStorage, "oilStorageCost");
	Game.settings.turnRed(metal, oilStorage/2.5, "oilStorageMetalCost");
	
	Game.settings.turnRed(metal, metalStorage, "metalStorageCost");
	
	Game.settings.turnRed(gem, gemStorage, "gemStorageCost");
	Game.settings.turnRed(metal, gemStorage/2.5, "gemStorageMetalCost");
	
	Game.settings.turnRed(charcoal, charcoalStorage, "charcoalStorageCost");
	Game.settings.turnRed(metal, charcoalStorage/2.5, "charcoalStorageMetalCost");

	Game.settings.turnRed(wood, woodStorage, "woodStorageCost");
	Game.settings.turnRed(metal, woodStorage/2.5, "woodStorageMetalCost");
	
	Game.settings.turnRed(spaceMetal, spaceMetalStorage, "spaceMetalStorageCost");
	Game.settings.turnRed(metal, spaceMetalStorage*4, "spaceMetalStorageMetalCost");

	Game.settings.turnRed(methane, methaneStorage, "methaneStorageCost");
	Game.settings.turnRed(spaceMetal, methaneStorage/2.5, "methaneStorageSpaceMetalCost");

	Game.settings.turnRed(titanium, titaniumStorage, "titaniumStorageCost");
	Game.settings.turnRed(spaceMetal, titaniumStorage/2.5, "titaniumStorageSpaceMetalCost");

	Game.settings.turnRed(gold, goldStorage, "goldStorageCost");
	Game.settings.turnRed(spaceMetal, goldStorage/2.5, "goldStorageSpaceMetalCost");
	
	Game.settings.turnRed(silver, silverStorage, "silverStorageCost");
	Game.settings.turnRed(spaceMetal, silverStorage/2.5, "silverStorageSpaceMetalCost");

	Game.settings.turnRed(silicon, siliconStorage, "siliconStorageCost");
	Game.settings.turnRed(spaceMetal, siliconStorage/2.5, "siliconStorageSpaceMetalCost");

	Game.settings.turnRed(lava, lavaStorage, "lavaStorageCost");
	Game.settings.turnRed(spaceMetal, lavaStorage/2.5, "lavaStorageSpaceMetalCost");

	Game.settings.turnRed(hydrogen, hydrogenStorage, "hydrogenStorageCost");
	Game.settings.turnRed(spaceMetal, hydrogenStorage/2.5, "hydrogenStorageSpaceMetalCost");

	Game.settings.turnRed(helium, heliumStorage, "heliumStorageCost");
	Game.settings.turnRed(spaceMetal, heliumStorage/2.5, "heliumStorageSpaceMetalCost");

	Game.settings.turnRed(ice, iceStorage, "iceStorageCost");
	Game.settings.turnRed(spaceMetal, iceStorage/2.5, "iceStorageSpaceMetalCost");

	Game.settings.turnRed(meteorite, meteoriteStorage, "meteoriteStorageCost");
	Game.settings.turnRed(spaceMetal, meteoriteStorage*4, "meteoriteStorageSpaceMetalCost");
	
	Game.settings.turnRed(spaceMetal, heaterSpaceMetalCost, "heaterSpaceMetalCost");
	Game.settings.turnRed(gem, heaterGemCost, "heaterGemCost");
	Game.settings.turnRed(silicon, heaterSiliconCost, "heaterSiliconCost");

	Game.settings.turnRed(spaceMetal, plasmaticSpaceMetalCost, "plasmaticSpaceMetalCost");
	Game.settings.turnRed(silicon, plasmaticSiliconCost, "plasmaticSiliconCost");
	Game.settings.turnRed(meteorite, plasmaticMeteoriteCost, "plasmaticMeteoriteCost");

	Game.settings.turnRed(metal, batteryMetalCost, "batteryMetalCost");
	Game.settings.turnRed(gem, batteryGemCost, "batteryGemCost");
	Game.settings.turnRed(spaceMetal, batterySpaceMetalCost, "batterySpaceMetalCost");

	Game.settings.turnRed(metal, batteryT2MetalCost, "batteryT2MetalCost");
	Game.settings.turnRed(gem, batteryT2GemCost, "batteryT2GemCost");
	Game.settings.turnRed(spaceMetal, batteryT2SpaceMetalCost, "batteryT2SpaceMetalCost");

	Game.settings.turnRed(metal, charcoalEngineMetalCost, "charcoalEngineMetalCost");
	Game.settings.turnRed(gem, charcoalEngineGemCost, "charcoalEngineGemCost");

	Game.settings.turnRed(metal, solarPanelMetalCost, "solarPanelMetalCost");
	Game.settings.turnRed(gem, solarPanelGemCost, "solarPanelGemCost");

	if(spaceMetal < methaneStationSpaceMetalCost){
		document.getElementById("methaneStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("methaneStationSpaceMetalCost").className = "";
	}

	if(titanium < methaneStationTitaniumCost){
		document.getElementById("methaneStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("methaneStationTitaniumCost").className = "";
	}

	if(spaceMetal < nuclearStationSpaceMetalCost){
		document.getElementById("nuclearStationSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationSpaceMetalCost").className = "";
	}

	if(titanium < nuclearStationTitaniumCost){
		document.getElementById("nuclearStationTitaniumCost").className = "red";
	}
	else{
		document.getElementById("nuclearStationTitaniumCost").className = "";
	}
	
	if(spaceMetal < magmaticSpaceMetalCost){
		document.getElementById("magmaticSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("magmaticSpaceMetalCost").className = "";
	}

	if(gem < magmaticGemCost){
		document.getElementById("magmaticGemCost").className = "red";
	}
	else{
		document.getElementById("magmaticGemCost").className = "";
	}

	if(silver < magmaticSilverCost){
		document.getElementById("magmaticSilverCost").className = "red";
	}
	else{
		document.getElementById("magmaticSilverCost").className = "";
	}

	if(spaceMetal < fusionReactorSpaceMetalCost){
		document.getElementById("fusionReactorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSpaceMetalCost").className = "";
	}

	if(titanium < fusionReactorTitaniumCost){
		document.getElementById("fusionReactorTitaniumCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorTitaniumCost").className = "";
	}

	if(silicon < fusionReactorSiliconCost){
		document.getElementById("fusionReactorSiliconCost").className = "red";
	}
	else{
		document.getElementById("fusionReactorSiliconCost").className = "";
	}

	if(metal < pumpMetalCost){
		document.getElementById("pumpMetalCost").className = "red";
	}
	else{
		document.getElementById("pumpMetalCost").className = "";
	}
	
	if(gem < pumpGemCost){
		document.getElementById("pumpGemCost").className = "red";
	}
	else{
		document.getElementById("pumpGemCost").className = "";
	}

	Game.settings.turnRed(metal, pumpjackMetalCost, "pumpjackMetalCost");
	Game.settings.turnRed(gem, pumpjackGemCost, "pumpjackGemCost");
	Game.settings.turnRed(oil, pumpjackOilCost, "pumpjackOilCost");
	
	Game.settings.turnRed(spaceMetal, oilFieldSpaceMetalCost, "oilFieldSpaceMetalCost");
	Game.settings.turnRed(titanium, oilFieldTitaniumCost, "oilFieldTitaniumCost");
	Game.settings.turnRed(silicon, oilFieldSiliconCost, "oilFieldSiliconCost");

	Game.settings.turnRed(spaceMetal, oilRigSpaceMetalCost, "oilRigSpaceMetalCost");
	Game.settings.turnRed(titanium, oilRigTitaniumCost, "oilRigTitaniumCost");
	Game.settings.turnRed(meteorite, oilRigMeteoriteCost, "oilRigMeteoriteCost");

	if(metal < minerMetalCost){
		document.getElementById("minerMetalCost").className = "red";
	}
	else{
		document.getElementById("minerMetalCost").className = "";
	}
	
	if(wood < minerWoodCost){
		document.getElementById("minerWoodCost").className = "red";
	}
	else{
		document.getElementById("minerWoodCost").className = "";
	}
	
	if(metal < heavyDrillMetalCost){
		document.getElementById("heavyDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillMetalCost").className = "";
	}
	
	if(gem < heavyDrillGemCost){
		document.getElementById("heavyDrillGemCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillGemCost").className = "";
	}
	
	if(oil < heavyDrillOilCost){
		document.getElementById("heavyDrillOilCost").className = "red";
	}
	else{
		document.getElementById("heavyDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, gigaDrillSpaceMetalCost, "gigaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, gigaDrillGemCost, "gigaDrillGemCost");
	Game.settings.turnRed(silicon, gigaDrillSiliconCost, "gigaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, quantumDrillSpaceMetalCost, "quantumDrillSpaceMetalCost");
	Game.settings.turnRed(gold, quantumDrillGoldCost, "quantumDrillGoldCost");
	Game.settings.turnRed(meteorite, quantumDrillMeteoriteCost, "quantumDrillMeteoriteCost");

	if(metal < gemMinerMetalCost){
		document.getElementById("gemMinerMetalCost").className = "red";
	}
	else{
		document.getElementById("gemMinerMetalCost").className = "";
	}
	
	if(gem < gemMinerGemCost){
		document.getElementById("gemMinerGemCost").className = "red";
	}
	else{
		document.getElementById("gemMinerGemCost").className = "";
	}
	
	if(metal < advancedDrillMetalCost){
		document.getElementById("advancedDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillMetalCost").className = "";
	}
	
	if(gem < advancedDrillGemCost){
		document.getElementById("advancedDrillGemCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillGemCost").className = "";
	}
	
	if(oil < advancedDrillOilCost){
		document.getElementById("advancedDrillOilCost").className = "red";
	}
	else{
		document.getElementById("advancedDrillOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, diamondDrillSpaceMetalCost, "diamondDrillSpaceMetalCost");
	Game.settings.turnRed(gem, diamondDrillGemCost, "diamondDrillGemCost");
	Game.settings.turnRed(silicon, diamondDrillSiliconCost, "diamondDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, carbyneDrillSpaceMetalCost, "carbyneDrillSpaceMetalCost");
	Game.settings.turnRed(gem, carbyneDrillGemCost, "carbyneDrillGemCost");
	Game.settings.turnRed(meteorite, carbyneDrillMeteoriteCost, "carbyneDrillMeteoriteCost");
	
	if(metal < woodburnerMetalCost){
		document.getElementById("woodburnerMetalCost").className = "red";
	}
	else{
		document.getElementById("woodburnerMetalCost").className = "";
	}
	
	if(wood < woodburnerWoodCost){
		document.getElementById("woodburnerWoodCost").className = "red";
	}
	else{
		document.getElementById("woodburnerWoodCost").className = "";
	}
	
	if(metal < furnaceMetalCost){
		document.getElementById("furnaceMetalCost").className = "red";
	}
	else{
		document.getElementById("furnaceMetalCost").className = "";
	}
	
	if(wood < furnaceWoodCost){
		document.getElementById("furnaceWoodCost").className = "red";
	}
	else{
		document.getElementById("furnaceWoodCost").className = "";
	}
	
	if(oil < furnaceOilCost){
		document.getElementById("furnaceOilCost").className = "red";
	}
	else{
		document.getElementById("furnaceOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, kilnSpaceMetalCost, "kilnSpaceMetalCost");
	Game.settings.turnRed(gem, kilnGemCost, "kilnGemCost");
	Game.settings.turnRed(silicon, kilnSiliconCost, "kilnSiliconCost");

	Game.settings.turnRed(spaceMetal, fryerSpaceMetalCost, "fryerSpaceMetalCost");
	Game.settings.turnRed(lava, fryerLavaCost, "fryerLavaCost");
	Game.settings.turnRed(meteorite, fryerMeteoriteCost, "fryerMeteoriteCost");

	if(metal < woodcutterMetalCost){
		document.getElementById("woodcutterMetalCost").className = "red";
	}
	else{
		document.getElementById("woodcutterMetalCost").className = "";
	}
	
	if(wood < woodcutterWoodCost){
		document.getElementById("woodcutterWoodCost").className = "red";
	}
	else{
		document.getElementById("woodcutterWoodCost").className = "";
	}

	if(metal < laserCutterMetalCost){
		document.getElementById("laserCutterMetalCost").className = "red";
	}
	else{
		document.getElementById("laserCutterMetalCost").className = "";
	}
	
	if(gem < laserCutterGemCost){
		document.getElementById("laserCutterGemCost").className = "red";
	}
	else{
		document.getElementById("laserCutterGemCost").className = "";
	}
	
	if(oil < laserCutterOilCost){
		document.getElementById("laserCutterOilCost").className = "red";
	}
	else{
		document.getElementById("laserCutterOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, deforesterSpaceMetalCost, "deforesterSpaceMetalCost");
	Game.settings.turnRed(titanium, deforesterTitaniumCost, "deforesterTitaniumCost");
	Game.settings.turnRed(silicon, deforesterSiliconCost, "deforesterSiliconCost");

	Game.settings.turnRed(spaceMetal, infuserSpaceMetalCost, "infuserSpaceMetalCost");
	Game.settings.turnRed(oil, infuserOilCost, "infuserOilCost");
	Game.settings.turnRed(meteorite, infuserMeteoriteCost, "infuserMeteoriteCost");

	if(gem < moonWorkerGemCost){
		document.getElementById("moonWorkerGemCost").className = "red";
	}
	else{
		document.getElementById("moonWorkerGemCost").className = "";
	}
	
	if(metal < moonDrillMetalCost){
		document.getElementById("moonDrillMetalCost").className = "red";
	}
	else{
		document.getElementById("moonDrillMetalCost").className = "";
	}
	
	if(gem < moonDrillGemCost){
		document.getElementById("moonDrillGemCost").className = "red";
	}
	else{
		document.getElementById("moonDrillGemCost").className = "";
	}
	
	if(oil < moonDrillOilCost){
		document.getElementById("moonDrillOilCost").className = "red";
	}
	else{
		document.getElementById("moonDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, moonQuarrySpaceMetalCost, "moonQuarrySpaceMetalCost");
	Game.settings.turnRed(gem, moonQuarryGemCost, "moonQuarryGemCost");
	Game.settings.turnRed(silicon, moonQuarrySiliconCost, "moonQuarrySiliconCost");

	Game.settings.turnRed(titanium, planetExcavatorTitaniumCost, "planetExcavatorTitaniumCost");
	Game.settings.turnRed(ice, planetExcavatorIceCost, "planetExcavatorIceCost");
	Game.settings.turnRed(meteorite, planetExcavatorMeteoriteCost, "planetExcavatorMeteoriteCost");


	if(spaceMetal < vacuumSpaceMetalCost){
		document.getElementById("vacuumSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("vacuumSpaceMetalCost").className = "";
	}
	
	if(gem < vacuumGemCost){
		document.getElementById("vacuumGemCost").className = "red";
	}
	else{
		document.getElementById("vacuumGemCost").className = "";
	}
	
	if(spaceMetal < suctionExcavatorSpaceMetalCost){
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorSpaceMetalCost").className = "";
	}

	if(gem < suctionExcavatorGemCost){
		document.getElementById("suctionExcavatorGemCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorGemCost").className = "";
	}

	if(oil < suctionExcavatorOilCost){
		document.getElementById("suctionExcavatorOilCost").className = "red";
	}
	else{
		document.getElementById("suctionExcavatorOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, spaceCowSpaceMetalCost, "spaceCowSpaceMetalCost");
	Game.settings.turnRed(titanium, spaceCowTitaniumCost, "spaceCowTitaniumCost");
	Game.settings.turnRed(silicon, spaceCowSiliconCost, "spaceCowSiliconCost");

	Game.settings.turnRed(spaceMetal, ventSpaceMetalCost, "ventSpaceMetalCost");
	Game.settings.turnRed(helium, ventHeliumCost, "ventHeliumCost");
	Game.settings.turnRed(meteorite, ventMeteoriteCost, "ventMeteoriteCost");

	if(gem < explorerGemCost){
		document.getElementById("explorerGemCost").className = "red";
	}
	else{
		document.getElementById("explorerGemCost").className = "";
	}
	
	if(spaceMetal < spaceMetalDrillSpaceMetalCost){
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillSpaceMetalCost").className = "";
	}
	
	if(gem < spaceMetalDrillGemCost){
		document.getElementById("spaceMetalDrillGemCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillGemCost").className = "";
	}
	
	if(oil < spaceMetalDrillOilCost){
		document.getElementById("spaceMetalDrillOilCost").className = "red";
	}
	else{
		document.getElementById("spaceMetalDrillOilCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, pentaDrillSpaceMetalCost, "pentaDrillSpaceMetalCost");
	Game.settings.turnRed(gem, pentaDrillGemCost, "pentaDrillGemCost");
	Game.settings.turnRed(silicon, pentaDrillSiliconCost, "pentaDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, titanDrillSpaceMetalCost, "titanDrillSpaceMetalCost");
	Game.settings.turnRed(gold, titanDrillGoldCost, "titanDrillGoldCost");
	Game.settings.turnRed(meteorite, titanDrillMeteoriteCost, "titanDrillMeteoriteCost");

	if(spaceMetal < droidSpaceMetalCost){
		document.getElementById("droidSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("droidSpaceMetalCost").className = "";
	}
	
	if(methane < droidMethaneCost){
		document.getElementById("droidMethaneCost").className = "red";
	}
	else{
		document.getElementById("droidMethaneCost").className = "";
	}
	
	if(spaceMetal < destroyerSpaceMetalCost){
		document.getElementById("destroyerSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("destroyerSpaceMetalCost").className = "";
	}

	if(gem < destroyerGemCost){
		document.getElementById("destroyerGemCost").className = "red";
	}
	else{
		document.getElementById("destroyerGemCost").className = "";
	}
	
	if(oil < destroyerOilCost){
		document.getElementById("destroyerOilCost").className = "red";
	}
	else{
		document.getElementById("destroyerOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, deathStarSpaceMetalCost, "deathStarSpaceMetalCost");
	Game.settings.turnRed(silver, deathStarSilverCost, "deathStarSilverCost");
	Game.settings.turnRed(silicon, deathStarSiliconCost, "deathStarSiliconCost");

	Game.settings.turnRed(spaceMetal, actuatorSpaceMetalCost, "actuatorSpaceMetalCost");
	Game.settings.turnRed(helium, actuatorHeliumCost, "actuatorHeliumCost");
	Game.settings.turnRed(meteorite, actuatorMeteoriteCost, "actuatorMeteoriteCost");
	
	if(spaceMetal < scoutSpaceMetalCost){
		document.getElementById("scoutSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scoutSpaceMetalCost").className = "";
	}
	
	if(titanium < scoutTitaniumCost){
		document.getElementById("scoutTitaniumCost").className = "red";
	}
	else{
		document.getElementById("scoutTitaniumCost").className = "";
	}
	
	if(spaceMetal < spaceLaserSpaceMetalCost){
		document.getElementById("spaceLaserSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserSpaceMetalCost").className = "";
	}
	
	if(gem < spaceLaserGemCost){
		document.getElementById("spaceLaserGemCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserGemCost").className = "";
	}
	
	if(oil < spaceLaserOilCost){
		document.getElementById("spaceLaserOilCost").className = "red";
	}
	else{
		document.getElementById("spaceLaserOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, berthaSpaceMetalCost, "berthaSpaceMetalCost");
	Game.settings.turnRed(titanium, berthaTitaniumCost, "berthaTitaniumCost");
	Game.settings.turnRed(silicon, berthaSiliconCost, "berthaSiliconCost");

	Game.settings.turnRed(spaceMetal, cannonSpaceMetalCost, "cannonSpaceMetalCost");
	Game.settings.turnRed(oil, cannonOilCost, "cannonOilCost");
	Game.settings.turnRed(meteorite, cannonMeteoriteCost, "cannonMeteoriteCost");
	
	if(spaceMetal < blowtorchSpaceMetalCost){
		document.getElementById("blowtorchSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("blowtorchSpaceMetalCost").className = "";
	}
	
	if(titanium < blowtorchTitaniumCost){
		document.getElementById("blowtorchTitaniumCost").className = "red";
	}
	else{
		document.getElementById("blowtorchTitaniumCost").className = "";
	}
	
	if(spaceMetal < scorcherSpaceMetalCost){
		document.getElementById("scorcherSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("scorcherSpaceMetalCost").className = "";
	}
	
	if(gem < scorcherGemCost){
		document.getElementById("scorcherGemCost").className = "red";
	}
	else{
		document.getElementById("scorcherGemCost").className = "";
	}
	
	if(oil < scorcherOilCost){
		document.getElementById("scorcherOilCost").className = "red";
	}
	else{
		document.getElementById("scorcherOilCost").className = "";
	}

	if(spaceMetal < annihilatorSpaceMetalCost){
		document.getElementById("annihilatorSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSpaceMetalCost").className = "";
	}
	
	if(gem < annihilatorGemCost){
		document.getElementById("annihilatorGemCost").className = "red";
	}
	else{
		document.getElementById("annihilatorGemCost").className = "";
	}
	
	if(silver < annihilatorSilverCost){
		document.getElementById("annihilatorSilverCost").className = "red";
	}
	else{
		document.getElementById("annihilatorSilverCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, desertSpaceMetalCost, "desertSpaceMetalCost");
	Game.settings.turnRed(silicon, desertSiliconCost, "desertSiliconCost");
	Game.settings.turnRed(meteorite, desertMeteoriteCost, "desertMeteoriteCost");
	
	if(wood < labWoodCost){
		document.getElementById("labWoodCost").className = "red";
	}
	else{
		document.getElementById("labWoodCost").className = "";
	}
	
	if(gem < labGemCost){
		document.getElementById("labGemCost").className = "red";
	}
	else{
		document.getElementById("labGemCost").className = "";
	}
	
	if(metal < labMetalCost){
		document.getElementById("labMetalCost").className = "red";
	}
	else{
		document.getElementById("labMetalCost").className = "";
	}

	Game.settings.turnRed(metal, labT2MetalCost, "labT2MetalCost");
	Game.settings.turnRed(gem, labT2GemCost, "labT2GemCost");
	Game.settings.turnRed(wood, labT2WoodCost, "labT2WoodCost");

	Game.settings.turnRed(metal, labT3MetalCost, "labT3MetalCost");
	Game.settings.turnRed(gem, labT3GemCost, "labT3GemCost");
	Game.settings.turnRed(wood, labT3WoodCost, "labT3WoodCost");

	if(science < 5){
		document.getElementById("unlockStorageCost").className = "red";
	}
	else{
		document.getElementById("unlockStorageCost").className = "";
	}

	if(science < 20){
		document.getElementById("unlockBasicEnergyCost").className = "red";
	}
	else{
		document.getElementById("unlockBasicEnergyCost").className = "";
	}

	if(science < 30){
		document.getElementById("unlockOilCost").className = "red";
	}
	else{
		document.getElementById("unlockOilCost").className = "";
	}

	if(science < 30){
		document.getElementById("unlockOilCost").className = "red";
	}
	else{
		document.getElementById("unlockOilCost").className = "";
	}

	if(science < 50){
		document.getElementById("unlockSolarCost").className = "red";
	}
	else{
		document.getElementById("unlockSolarCost").className = "";
	}

	if(science < 100){
		document.getElementById("unlockMachinesCost").className = "red";
	}
	else{
		document.getElementById("unlockMachinesCost").className = "";
	}

	Game.settings.turnRed(science, 500, "unlockDestructionCost");

	if(science < 300){
		document.getElementById("upgradeResourceTechCost").className = "red";
	}
	else{
		document.getElementById("upgradeResourceTechCost").className = "";
	}

	if(science < 500){
		document.getElementById("unlockSolarSystemCost").className = "red";
	}
	else{
		document.getElementById("unlockSolarSystemCost").className = "";
	}

	Game.settings.turnRed(science, 500, "unlockLabT2Cost");
	Game.settings.turnRed(science, 1000, "upgradeEngineTechCost");
	Game.settings.turnRed(science, 3000, "unlockLabT3Cost");
	Game.settings.turnRed(science, 5000, "upgradeSolarTechCost");
	Game.settings.turnRed(science, 15000, "unlockBatteriesCost");
	Game.settings.turnRed(science, 40000, "unlockPlasmaCost");
	Game.settings.turnRed(science, 60000, "unlockPlasmaTier2Cost");
	Game.settings.turnRed(science, 60000, "unlockEmcCost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteCost");
	Game.settings.turnRed(science, 75000, "unlockMeteoriteTier1Cost");
	Game.settings.turnRed(science, 100000, "unlockMeteoriteTier2Cost");
	Game.settings.turnRed(science, 100000, "unlockDysonCost");
	Game.settings.turnRed(science, 300000, "unlockBatteriesT2Cost");
	Game.settings.turnRed(science, 500000, "unlockDysonSphereCost");

	if(metal < 1200){
		document.getElementById("rocketMetalCost").className = "red";
	}
	else{
		document.getElementById("rocketMetalCost").className = "";
	}

	if(gem < 900){
		document.getElementById("rocketGemCost").className = "red";
	}
	else{
		document.getElementById("rocketGemCost").className = "";
	}

	if(oil < 1000){
		document.getElementById("rocketOilCost").className = "red";
	}
	else{
		document.getElementById("rocketOilCost").className = "";
	}

	if(metal < chemicalPlantMetalCost){
		document.getElementById("chemicalPlantMetalCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantMetalCost").className = "";
	}
	
	if(gem < chemicalPlantGemCost){
		document.getElementById("chemicalPlantGemCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantGemCost").className = "";
	}
	
	if(oil < chemicalPlantOilCost){
		document.getElementById("chemicalPlantOilCost").className = "red";
	}
	else{
		document.getElementById("chemicalPlantOilCost").className = "";
	}
	
	if(rocketFuel < 20){
		document.getElementById("moonRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("moonRocketFuelCost").className = "";
	}

	if(rocketFuel < 50){
		document.getElementById("venusRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("venusRocketFuelCost").className = "";
	}

	if(rocketFuel < 80){
		document.getElementById("marsRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("marsRocketFuelCost").className = "";
	}

	if(rocketFuel < 200){
		document.getElementById("asteroidBeltRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("asteroidBeltRocketFuelCost").className = "";
	}

	if(rocketFuel < 500){
		document.getElementById("wonderStationRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("wonderStationRocketFuelCost").className = "";
	}

	if(rocketFuel < 1000){
		document.getElementById("jupiterRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("jupiterRocketFuelCost").className = "";
	}

	if(rocketFuel < 2000){
		document.getElementById("saturnRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("saturnRocketFuelCost").className = "";
	}

	if(rocketFuel < 5000){
		document.getElementById("plutoRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("plutoRocketFuelCost").className = "";
	}

	if(rocketFuel < 6000){
		document.getElementById("kuiperBeltRocketFuelCost").className = "red";
	}
	else{
		document.getElementById("kuiperBeltRocketFuelCost").className = "";
	}

	Game.settings.turnRed(rocketFuel, 7000, "solCenterRocketFuelCost");

	if(titanium < grinderTitaniumCost){
		document.getElementById("grinderTitaniumCost").className = "red";
	}
	else{
		document.getElementById("grinderTitaniumCost").className = "";
	}
	
	if(spaceMetal < grinderSpaceMetalCost){
		document.getElementById("grinderSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("grinderSpaceMetalCost").className = "";
	}
	
	if(gold < grinderGoldCost){
		document.getElementById("grinderGoldCost").className = "red";
	}
	else{
		document.getElementById("grinderGoldCost").className = "";
	}
	
	if(uranium < cubicUraniumCost){
		document.getElementById("cubicUraniumCost").className = "red";
	}
	else{
		document.getElementById("cubicUraniumCost").className = "";
	}
	
	if(spaceMetal < cubicSpaceMetalCost){
		document.getElementById("cubicSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("cubicSpaceMetalCost").className = "";
	}
	
	if(oil < cubicOilCost){
		document.getElementById("cubicOilCost").className = "red";
	}
	else{
		document.getElementById("cubicOilCost").className = "";
	}

	Game.settings.turnRed(spaceMetal, enricherSpaceMetalCost, "enricherSpaceMetalCost");
	Game.settings.turnRed(titanium, enricherTitaniumCost, "enricherTitaniumCost");
	Game.settings.turnRed(silicon, enricherSiliconCost, "enricherSiliconCost");

	Game.settings.turnRed(spaceMetal, recyclerSpaceMetalCost, "recyclerSpaceMetalCost");
	Game.settings.turnRed(methane, recyclerMethaneCost, "recyclerMethaneCost");
	Game.settings.turnRed(meteorite, recyclerMeteoriteCost, "recyclerMeteoriteCost");

	if(gem < crucibleGemCost){
		document.getElementById("crucibleGemCost").className = "red";
	}
	else{
		document.getElementById("crucibleGemCost").className = "";
	}
	
	if(spaceMetal < crucibleSpaceMetalCost){
		document.getElementById("crucibleSpaceMetalCost").className = "red";
	}
	else{
		document.getElementById("crucibleSpaceMetalCost").className = "";
	}
	
	Game.settings.turnRed(spaceMetal, extractorSpaceMetalCost, "extractorSpaceMetalCost");
	Game.settings.turnRed(titanium, extractorTitaniumCost, "extractorTitaniumCost");
	Game.settings.turnRed(silicon, extractorSiliconCost, "extractorSiliconCost");

	Game.settings.turnRed(spaceMetal, extruderSpaceMetalCost, "extruderSpaceMetalCost");
	Game.settings.turnRed(titanium, extruderTitaniumCost, "extruderTitaniumCost");
	Game.settings.turnRed(silicon, extruderSiliconCost, "extruderSiliconCost");

	Game.settings.turnRed(spaceMetal, veluptuatorSpaceMetalCost, "veluptuatorSpaceMetalCost");
	Game.settings.turnRed(gold, veluptuatorGoldCost, "veluptuatorGoldCost");
	Game.settings.turnRed(meteorite, veluptuatorMeteoriteCost, "veluptuatorMeteoriteCost");

	Game.settings.turnRed(spaceMetal, collectorSpaceMetalCost, "collectorSpaceMetalCost");
	Game.settings.turnRed(titanium, collectorTitaniumCost, "collectorTitaniumCost");

	Game.settings.turnRed(spaceMetal, magnetSpaceMetalCost, "magnetSpaceMetalCost");
	Game.settings.turnRed(titanium, magnetTitaniumCost, "magnetTitaniumCost");
	Game.settings.turnRed(gold, magnetGoldCost, "magnetGoldCost");

	Game.settings.turnRed(silver, eCellSilverCost, "eCellSilverCost");
	Game.settings.turnRed(gold, eCellGoldCost, "eCellGoldCost");
	Game.settings.turnRed(silicon, eCellSiliconCost, "eCellSiliconCost");

	Game.settings.turnRed(spaceMetal, hindenburgSpaceMetalCost, "hindenburgSpaceMetalCost");
	Game.settings.turnRed(methane, hindenburgMethaneCost, "hindenburgMethaneCost");
	Game.settings.turnRed(meteorite, hindenburgMeteoriteCost, "hindenburgMeteoriteCost");

	Game.settings.turnRed(spaceMetal, droneSpaceMetalCost, "droneSpaceMetalCost");
	Game.settings.turnRed(silicon, droneSiliconCost, "droneSiliconCost");
	
	Game.settings.turnRed(spaceMetal, tankerSpaceMetalCost, "tankerSpaceMetalCost");
	Game.settings.turnRed(titanium, tankerTitaniumCost, "tankerTitaniumCost");
	Game.settings.turnRed(silicon, tankerSiliconCost, "tankerSiliconCost");

	Game.settings.turnRed(spaceMetal, compressorSpaceMetalCost, "compressorSpaceMetalCost");
	Game.settings.turnRed(titanium, compressorTitaniumCost, "compressorTitaniumCost");
	Game.settings.turnRed(silicon, compressorSiliconCost, "compressorSiliconCost");

	Game.settings.turnRed(spaceMetal, skimmerSpaceMetalCost, "skimmerSpaceMetalCost");
	Game.settings.turnRed(titanium, skimmerTitaniumCost, "skimmerTitaniumCost");
	Game.settings.turnRed(meteorite, skimmerMeteoriteCost, "skimmerMeteoriteCost");

	Game.settings.turnRed(spaceMetal, icePickSpaceMetalCost, "icePickSpaceMetalCost");
	Game.settings.turnRed(gem, icePickGemCost, "icePickGemCost");
	
	Game.settings.turnRed(spaceMetal, iceDrillSpaceMetalCost, "iceDrillSpaceMetalCost");
	Game.settings.turnRed(titanium, iceDrillTitaniumCost, "iceDrillTitaniumCost");
	Game.settings.turnRed(silicon, iceDrillSiliconCost, "iceDrillSiliconCost");

	Game.settings.turnRed(spaceMetal, freezerSpaceMetalCost, "freezerSpaceMetalCost");
	Game.settings.turnRed(titanium, freezerTitaniumCost, "freezerTitaniumCost");
	Game.settings.turnRed(silicon, freezerSiliconCost, "freezerSiliconCost");

	Game.settings.turnRed(spaceMetal, mrFreezeSpaceMetalCost, "mrFreezeSpaceMetalCost");
	Game.settings.turnRed(helium, mrFreezeHeliumCost, "mrFreezeHeliumCost");
	Game.settings.turnRed(meteorite, mrFreezeMeteoriteCost, "mrFreezeMeteoriteCost");

	Game.settings.turnRed(spaceMetal, printerSpaceMetalCost, "printerSpaceMetalCost");
	Game.settings.turnRed(silicon, printerSiliconCost, "printerSiliconCost");

	Game.settings.turnRed(spaceMetal, webSpaceMetalCost, "webSpaceMetalCost");
	Game.settings.turnRed(uranium, webUraniumCost, "webUraniumCost");
	Game.settings.turnRed(silicon, webSiliconCost, "webSiliconCost");

	Game.settings.turnRed(titanium, dysonTitaniumCost, "dysonTitaniumCost");
	Game.settings.turnRed(gold, dysonGoldCost, "dysonGoldCost");
	Game.settings.turnRed(silicon, dysonSiliconCost, "dysonSiliconCost");
	Game.settings.turnRed(meteorite, dysonMeteoriteCost, "dysonMeteoriteCost");
	Game.settings.turnRed(ice, dysonIceCost, "dysonIceCost");

	Game.settings.turnRed(rocketFuel, 250000, "swarmRocketFuelCost");
	Game.settings.turnRed(rocketFuel, 1000000, "sphereRocketFuelCost");

	Game.settings.turnRed(hydrogen, 1500, "unlockPlasmaResearchHydrogenCost");
	Game.settings.turnRed(uranium, 1500, "unlockPlasmaResearchUraniumCost");
	Game.settings.turnRed(oil, 15000, "unlockPlasmaResearchOilCost");
	Game.settings.turnRed(wood, 15000, "unlockPlasmaResearchWoodCost");

	Game.settings.turnRed(energy, 75000, "unlockEmcResearchEnergyCost");
	Game.settings.turnRed(plasma, 100, "unlockEmcResearchPlasmaCost");

	Game.settings.turnRed(energy, 100000, "unlockDysonResearchEnergyCost");
	Game.settings.turnRed(plasma, 10000, "unlockDysonResearchPlasmaCost");

	Game.settings.turnRed(gem, preciousGemCost, "preciousGemCost");
	Game.settings.turnRed(silver, preciousSilverCost, "preciousSilverCost");
	Game.settings.turnRed(gold, preciousGoldCost, "preciousGoldCost");

	Game.settings.turnRed(gem, preciousActivateGemCost, "preciousActivateGemCost");
	Game.settings.turnRed(silver, preciousActivateSilverCost, "preciousActivateSilverCost");
	Game.settings.turnRed(gold, preciousActivateGoldCost, "preciousActivateGoldCost");

	Game.settings.turnRed(wood, energeticWoodCost, "energeticWoodCost");
	Game.settings.turnRed(charcoal, energeticCharcoalCost, "energeticCharcoalCost");
	Game.settings.turnRed(uranium, energeticUraniumCost, "energeticUraniumCost");

	Game.settings.turnRed(wood, energeticActivateWoodCost, "energeticActivateWoodCost");
	Game.settings.turnRed(charcoal, energeticActivateCharcoalCost, "energeticActivateCharcoalCost");
	Game.settings.turnRed(uranium, energeticActivateUraniumCost, "energeticActivateUraniumCost");

	Game.settings.turnRed(silicon, techSiliconCost, "techSiliconCost");
	Game.settings.turnRed(gold, techGoldCost, "techGoldCost");
	Game.settings.turnRed(gem, techGemCost, "techGemCost");

	Game.settings.turnRed(silicon, techActivateSiliconCost, "techActivateSiliconCost");
	Game.settings.turnRed(gold, techActivateGoldCost, "techActivateGoldCost");
	Game.settings.turnRed(gem, techActivateGemCost, "techActivateGemCost");

	Game.settings.turnRed(meteorite, meteoriteMeteoriteCost, "meteoriteMeteoriteCost");
	Game.settings.turnRed(ice, meteoriteIceCost, "meteoriteIceCost");
	Game.settings.turnRed(silicon, meteoriteSiliconCost, "meteoriteSiliconCost");

	Game.settings.turnRed(meteorite, meteoriteActivateMeteoriteCost, "meteoriteActivateMeteoriteCost");
	Game.settings.turnRed(ice, meteoriteActivateIceCost, "meteoriteActivateIceCost");
	Game.settings.turnRed(silicon, meteoriteActivateSiliconCost, "meteoriteActivateSiliconCost");
}

function refreshResources(){
	if(contains(resourcesUnlocked, "meteoriteWonder")){
		var index = resourcesUnlocked.indexOf("meteoriteWonder");
 		if (index > -1) {
		    resourcesUnlocked.splice(index, 1);
		}
	}
	for(var i=0; i<resourcesUnlocked.length; i++){
		document.getElementById(resourcesUnlocked[i]).className = "";
	}
	if(contains(resourcesUnlocked, "oilNav")){
		document.getElementById("oilNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "charcoalNav")){
		document.getElementById("charcoalNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "siliconNav")){
		document.getElementById("siliconNav").className = "earth";
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "methaneNav")){
		document.getElementById("methaneNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "titaniumNav")){
		document.getElementById("titaniumNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "goldNav")){
		document.getElementById("goldNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "silverNav")){
		document.getElementById("silverNav").className = "innerPlanet";
	}
	if(contains(resourcesUnlocked, "hydrogenNav")){
		document.getElementById("hydrogenNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "heliumNav")){
		document.getElementById("heliumNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "iceNav")){
		document.getElementById("iceNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "meteoriteNav")){
		document.getElementById("meteoriteNav").className = "outerPlanet";
	}
	if(contains(resourcesUnlocked, "meteoriteWonderNav")){
		document.getElementById("wonderFloor2Nav").className = "";
		document.getElementById("portalRoomNav").className = "";
		resourcesUnlocked.push("wonderFloor2Nav", "portalRoomNav");
	}
	for(var i=0; i<noBorder.length; i++){
		for(var j=0; j<4; j++){
			document.getElementById(noBorder[i] + j).style.border = "";
		}
	}
	for(var i=0; i<activated.length; i++){
		document.getElementById(activated[i] + "Activation").innerHTML = "Activated";
	}
	if(techUnlocked === true){
		unlockTier3();
	}
	if(meteoriteUnlocked === true){
		unlockTier4();
	}
	if(contains(resourcesUnlocked, "spaceMetalNav")){
		document.getElementById("spaceMetalNav").className = "innerPlanet";
	}
}

function contains(array, obj) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function refreshResearches(){
	for(var i=0; i<available.length; i++){
		document.getElementById(available[i]).className = "";
	}
	for(var i=0; i<researched.length; i++){
		document.getElementById(researched[i]).className = "hidden";
	}
	if(contains(researched, "unlockStorage")){
		document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("charcoalStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
	}
	if(contains(researched, "unlockSolar")){
		document.getElementById("solarPower").className = "";
	}
	if(contains(researched, "unlockMachines")){
		document.getElementById("oilMachine1").className = "";
		document.getElementById("metalMachine1").className = "";
		document.getElementById("gemMachine1").className = "";
		document.getElementById("charcoalMachine1").className = "";
		document.getElementById("woodMachine1").className = "";	
	}
	if(contains(researched, "unlockDestruction")){
		for(var i = 0; i < document.getElementsByClassName("destroy").length; i++){
			document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
		}
	}
	else{
		if(contains(available, "unlockDestruction") === false){
			if(contains(researched, "unlockMachines")){
				document.getElementById("unlockDestruction").className = "";
				available.push("unlockDestruction");
			}
		}
	}
	if(contains(researched, "unlockSolarSystem")){
		if(contains(available, "unlockLabT2") === false){
			document.getElementById("unlockLabT2").className = "";
			available.push("unlockLabT2");
		}
	}
	if(contains(researched, "unlockLabT2")){
		document.getElementById("labTier2").className = "";
	}
	if(contains(researched, "unlockLabT3")){
		document.getElementById("labTier3").className = "";
	}
	if(contains(researched, "upgradeSolarTech")){
		if(contains(available, "unlockBatteries") === false){
			document.getElementById("unlockBatteries").className ="";
			available.push("unlockBatteries");
		}
	}
	if(contains(researched, "unlockEmc")){
		if(contains(available, "unlockMeteorite") === false){
			document.getElementById("unlockMeteorite").className = "";
			available.push("unlockMeteorite");
		}
	}
	if(contains(researched, "unlockMeteorite")){
		if(contains(resourcesUnlocked, "meteoriteEMC") === false){
			document.getElementById("meteoriteEMC").className = "";
			resourcesUnlocked.push("meteoriteEMC");
		}
		if(contains(available, "unlockMeteoriteTier1") === false){
			document.getElementById("unlockMeteoriteTier1").className = "";
			available.push("unlockMeteoriteTier1");
		}
	}
	if(contains(researched, "unlockMeteoriteTier1")){
		if(contains(available, "unlockMeteoriteTier2") === false){
			document.getElementById("unlockMeteoriteTier2").className = "";
			available.push("unlockMeteoriteTier2");
		}
	}
	if(contains(researched, "unlockPlasma")){
		if(contains(available, "unlockPlasmaTier2") === false){
			document.getElementById("unlockPlasmaTier2").className ="";
			available.push("unlockPlasmaTier2");
		}
	}
	if(contains(researched, "unlockBatteries")){
		if(contains(available, "unlockBatteriesT2") === false){
			document.getElementById("unlockBatteriesT2").className ="";
			available.push("unlockBatteriesT2");
		}
	}
	if(contains(researched, "unlockDyson")){
		if(contains(available, "unlockDysonSphere") === false){
			document.getElementById("unlockDysonSphere").className ="";
			available.push("unlockDysonSphere");
		}
	}

	if(typeof versionNumber === "undefined" || versionNumber === "0.3.5" || versionNumber === "0.4.0"){
		swarm = sphere;
		sphere = 0;
		versionNumber = "0.4.1";
		refreshUI();
	}
}

function refreshTabs(){
	if(contains(tabsUnlocked, "dropdownMenu")){
 		var index = tabsUnlocked.indexOf("dropdownMenu");
 		if (index > -1) {
		    tabsUnlocked.splice(index, 1);
		}
 	}
	for(var i=0; i<tabsUnlocked.length; i++){
 		document.getElementById(tabsUnlocked[i]).className -= "hidden";
 	}
 	if(rocketLaunched === true){
 		document.getElementById("spaceRocket").className = "hidden";
  		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
 	}
 	if(contains(explored, "asteroidBelt")){
 		document.getElementById("wonderStation").className = "inner";
 		document.getElementById("collapseOuter").className ="collapseOuter";
 		document.getElementById("jupiter").className = "outer";
 		document.getElementById("saturn").className = "outer";
 		document.getElementById("uranus").className = "outer";
 		document.getElementById("neptune").className = "outer";
 		document.getElementById("pluto").className = "outer";
 		document.getElementById("kuiperBelt").className = "outer";
 	}
 	if(contains(explored, "kuiperBelt")){
 		document.getElementById("solCenter").className = "outer";
 	}
 	for(var i=0; i<buttonsHidden.length; i++){
 		document.getElementById(buttonsHidden[i]).className += " hidden";
 	}
}

// Collapses Resources

$('.collapseEarth').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("earth").length; i++){
        	document.getElementsByClassName("earth")[i].className = "earth hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInnerPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("innerPlanet").length; i++){
        	document.getElementsByClassName("innerPlanet")[i].className = "innerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuterPlanet').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outerPlanet").length; i++){
        	document.getElementsByClassName("outerPlanet")[i].className = "outerPlanet hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseInner').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("inner").length; i++){
        	document.getElementsByClassName("inner")[i].className = "inner hidden";
        }
        $(this).addClass("collapsed");
    }
});

$('.collapseOuter').click(function(){
    if($(this).hasClass("collapsed")){
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer";
        }
        $(this).removeClass("collapsed");
    } else {
        for(var i = 0; i < document.getElementsByClassName("outer").length; i++){
        	document.getElementsByClassName("outer")[i].className = "outer hidden";
        }
        $(this).addClass("collapsed");
    }
});

//ToolTips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
});