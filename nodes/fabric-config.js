module.exports = function(RED) {
    function FabricConfigNode(n) {
        RED.nodes.createNode(this,n);
        this.configLabel = n.configLabel;
        this.identityName = n.identityName;
        this.connectionProfile = n.connectionProfile;
        this.walletLocation = n.walletLocation;
    }
    RED.nodes.registerType("fabric-config", FabricConfigNode);
};
