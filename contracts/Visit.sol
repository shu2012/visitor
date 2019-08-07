pragma solidity ^0.4.24;

contract Visit {
    struct Member{
        uint count;
    }
    mapping(address => Member) member_map;
    address[] members; // 

    function getTotalCount() public view returns (uint) {
        return members.length; // 몇 명이 방문했는가 조회
    }
    function getMemberInfo(address sender) public view returns (uint) {
        Member memory m = member_map[sender];
        return m.count;
    }
   
    function visit() public {
        if(member_map[msg.sender].count > 0){ // 한번이라도 방문한적 있다면,
            member_map[msg.sender].count += 1; // msg.sender - wallet 이용자의 주소
        }else{ 
        members.push(msg.sender);
        Member memory m;
        m.count = 1;
        member_map[msg.sender] = m;
        }
    }
}