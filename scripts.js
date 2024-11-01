function createDiagram(containerId, modelData) {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, containerId, {
        "undoManager.isEnabled": true,
        initialPosition: new go.Point(0, 0)  // Define a posição inicial como o ponto (0, 0)
    });

    // Template de nó
    diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        { locationSpot: go.Spot.Center },
        $(go.Shape, "RoundedRectangle", { fill: "#E8F0FE", stroke: "#3b82f6", strokeWidth: 2 }),
        $(
            go.Panel,
            "Table",
            { margin: 8 },
            $(go.RowColumnDefinition, { row: 0, background: "#3b82f6" }),
            $(go.TextBlock, { row: 0, column: 0, columnSpan: 3, font: "bold 14px sans-serif", stroke: "white", margin: 5 }, new go.Binding("text", "name")),
            $(
                go.Panel,
                "Vertical",
                { row: 1, column: 0, columnSpan: 3, padding: 5 },
                new go.Binding("itemArray", "attributes"),
                {
                    itemTemplate: $(
                        go.Panel,
                        "Horizontal",
                        { defaultAlignment: go.Spot.Left, margin: new go.Margin(2, 0, 2, 0) },
                        $(go.TextBlock, { font: "bold 11px sans-serif", stroke: "#1f2937", width: 150 }, new go.Binding("text", "name")),
                        $(go.TextBlock, { font: "11px sans-serif", stroke: "#6b7280", width: 80, margin: new go.Margin(0, 5, 0, 10) }, new go.Binding("text", "type")),
                        $(go.TextBlock, { font: "italic 11px sans-serif", stroke: "#10b981", width: 50 }, new go.Binding("text", "modifier"))
                    )
                }
            )
        )
    );

    // Template de link
    diagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver, corner: 5 },
        $(go.Shape, { strokeWidth: 2, stroke: "#3b82f6" }),
        $(go.TextBlock, new go.Binding("text", "relationship"), { segmentOffset: new go.Point(0, -10) })
    );

    // Configura modelo
    diagram.model = new go.GraphLinksModel(modelData.nodes, modelData.links);

    // Define o zoom inicial e a posição após o diagrama ser carregado
    diagram.addDiagramListener("InitialLayoutCompleted", function() {
        diagram.scale = 0.9; // Define o zoom para 100%
        diagram.position = new go.Point(-200, -100); // Posiciona no ponto (-200, -100) para centralizar o layout
    });
}

// Dados do primeiro diagrama lógico
const logicalData1 = {
    nodes: [
        { key: 1, name: "Contrato", loc: "0 0", attributes: [
            { name: "contrato_id", type: "INT", modifier: "<<PK>>" },
            { name: "analista_id", type: "INT", modifier: "<<FK>>" },
            { name: "status", type: "CHAR", modifier: "" },
            { name: "data_inicio", type: "DATE", modifier: "" },
            { name: "data_fim", type: "DATE", modifier: "" },
            { name: "valor_mensal", type: "DECIMAL", modifier: "" },
            { name: "valor_anual", type: "DECIMAL", modifier: "" },
            { name: "info_repactuacao_2023", type: "VARCHAR", modifier: "" },
            { name: "info_repactuacao_2024", type: "VARCHAR", modifier: "" },
            { name: "info_reajuste_2024", type: "VARCHAR", modifier: "" }
        ]},
        { key: 2, name: "Órgão", loc: "-200 -150", attributes: [
            { name: "orgao_id", type: "INT", modifier: "<<PK>>" },
            { name: "nome", type: "VARCHAR", modifier: "" },
            { name: "endereco", type: "TEXT", modifier: "" },
            { name: "cnpj", type: "VARCHAR", modifier: "" }
        ]},
        { key: 3, name: "Valor", loc: "200 -150", attributes: [
            { name: "valor_id", type: "INT", modifier: "<<PK>>" },
            { name: "contrato_id", type: "INT", modifier: "<<FK>>" },
            { name: "valor_mensal_empregado", type: "DECIMAL", modifier: "" },
            { name: "valor_mensal_material", type: "DECIMAL", modifier: "" },
            { name: "valor_mensal_total", type: "DECIMAL", modifier: "" },
            { name: "valor_anual", type: "DECIMAL", modifier: "" }
        ]},
        { key: 4, name: "Aditivo", loc: "-200 150", attributes: [
            { name: "aditivo_id", type: "INT", modifier: "<<PK>>" },
            { name: "contrato_id", type: "INT", modifier: "<<FK>>" },
            { name: "data", type: "DATE", modifier: "" },
            { name: "motivo", type: "VARCHAR", modifier: "" },
            { name: "quantidade_mo", type: "INT", modifier: "" },
            { name: "valor_mensal", type: "DECIMAL", modifier: "" },
            { name: "valor_anual", type: "DECIMAL", modifier: "" },
            { name: "assinado_tomador", type: "BOOLEAN", modifier: "" }
        ]},
        { key: 5, name: "Analista", loc: "200 150", attributes: [
            { name: "analista_id", type: "INT", modifier: "<<PK>>" },
            { name: "nome", type: "VARCHAR", modifier: "" },
            { name: "codigo", type: "VARCHAR", modifier: "" }
        ]}
    ],
    links: [
        { from: 1, to: 2, relationship: "VINCULADO" },
        { from: 1, to: 3, relationship: "POSSUI" },
        { from: 1, to: 4, relationship: "POSSUI" },
        { from: 1, to: 5, relationship: "ASSOCIADO" }
    ]
};

// Inicializa os diagramas
document.addEventListener("DOMContentLoaded", function() {
    createDiagram("diagramDiv1", logicalData1);
});

