document.addEventListener('DOMContentLoaded', function () {
    const cy = cytoscape({
        container: document.getElementById('cy'), // Container to render the graph
        elements: [
            // Nodes
            { data: { id: 'a' } },
            { data: { id: 'b' } },
            { data: { id: 'c' } },

            // Edges
            { data: { id: 'ab', source: 'a', target: 'b' } },
            { data: { id: 'bc', source: 'b', target: 'c' } },
            { data: { id: 'ac', source: 'c', target: 'a' } }
        ],
        style: [
            {
                selector: 'node',
                style: {
                    'label': 'data(id)', // Show node ID as label
                    'background-color': '#75ff33',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'color': '#000000',
                    'width': 40,
                    'height': 40
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#999',
                    'curve-style': 'bezier'
                }
            }
        ],
        layout: {
            name: 'circle' // Arrange nodes in a circle
        }
    });

    // Enable dragging and dropping nodes
    cy.nodes().on('drag', function (event) {
        console.log('Node moved:', event.target.id());
    });

    // Add a new node
    window.addNode = function () {
        const newNodeId = 'node' + (cy.nodes().length + 1);
        cy.add({
            group: 'nodes',
            data: { id: newNodeId }
        });
    };

    // Add a new node
    window.clearAll = function () {
        cy.remove(cy.elements());
        alert('All nodes and edges have been cleared.');
    };
});

