pragma solidity ^0.4.17;

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        // amount of personen which votes with "yes"
        uint approvalCount;
        // mapping of addresses with vote "yes"
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        // approvers.push(msg.sender);
        approvers[msg.sender] = true;
    }

    function createRequest(
        string description, uint value, address recipient
    ) public restricted {
        // require(approvers[msg.sender]);
        // when initializing a struct, we just have to pass the value types (no mappings)
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        // alternative: Request(description, value, recipient, false);

        requests.push(newRequest);
    }

    function approveRequest(uint requestIndex) public {
        // save storage variable in local variable
        Request storage request = requests[requestIndex];
        // the person who wants to vote, should be a contributer to the campaign
        require(approvers[msg.sender]);
        // the person which wants to vote, should not be able to vote again
        require(!request.approvals[msg.sender]); // returns false if voter voted

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
}
