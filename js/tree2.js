const sepa = Sepajs.client;

function loadPlaceTree() {
    
    prefixes = "";
    for (ns in jsap["namespaces"]) {
        prefixes += " PREFIX " + ns + ":<" + jsap["namespaces"][ns] + ">";
    }
<<<<<<< HEAD
    let allRootPlaces = prefixes + " " + jsap["queries"]["ROOT_PLACES"]["sparql"];
=======
    let allRootPlaces = prefixes + " " + jsap["queries"]["MAP_PLACES"]["sparql"];
>>>>>>> f6e59935277c396fea4d4cc05eece236a2910e0a
    let allObservations = prefixes + " " + jsap["queries"]["OBSERVATIONS"]["sparql"];
    
    let tree  = []
   

    return sepa.query(allObservations,jsap).then((data) => {
        let obsMapping = {}

        data.results.bindings.forEach(binding => {
            let loc = binding.location.value
            let obs = binding.observation.value
            
            obsMapping[loc] = obsMapping[loc] ? obsMapping[loc] : []
            let obsNode = {
                text : binding.label.value,
                uri : obs,
                symbol : binding.symbol.value
            }
            obsMapping[loc].push(obsNode)
        })

        return obsMapping
    }).then((mapping) => {
        return sepa.query(allRootPlaces, jsap).then((data) => {
            let promises = []
            data.results.bindings.forEach(binding => {
                let parentNode = {
                    text: binding.name.value,
                    uri: binding.root.value,
<<<<<<< HEAD
                    selectable : false
=======
                    selectable : false,
                    lat : binding.lat.value,
                    long : binding.long.value
>>>>>>> f6e59935277c396fea4d4cc05eece236a2910e0a

                }

                tree.push(parentNode)

                promises.push(loadPlace(binding.root.value, parentNode,mapping))
            });
            return Promise.all(promises).then(() => {
                return tree
            })
        })
    })

}

function loadPlace(rootPlace,parentNode,mapping) {
   
    prefixes = "";
    
    for (ns in jsap["namespaces"]) {
        prefixes += " PREFIX " + ns + ":<" + jsap["namespaces"][ns] + ">";
    }

    let containedPlaces = prefixes + " " + jsap["queries"]["CONTAINED_PLACES"]["sparql"];
    containedPlaces = containedPlaces.replace("?root", "<" + rootPlace + ">");

    return sepa.query(containedPlaces, jsap).then((data) => {
        let promises = []

        // Add node property only if there are any children
        if(data.results.bindings.length > 0 && !parentNode.nodes){
            parentNode.nodes = []
        } 
        
        if (mapping[rootPlace] && mapping[rootPlace].length > 0) {
            parentNode.nodes = parentNode.nodes ? parentNode.nodes : []
            parentNode.nodes = parentNode.nodes.concat(mapping[rootPlace])
        }
        
        data.results.bindings.forEach(binding => {
            let childNode = {
                text:  binding.name.value,
                uri: binding.child.value,
                selectable : false
            }

            parentNode.nodes.push(childNode)

            promises.push(loadPlace(binding.child.value, childNode,mapping))
        });
        
        return Promise.all(promises)
    })
}