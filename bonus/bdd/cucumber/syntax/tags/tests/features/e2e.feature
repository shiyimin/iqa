@e2e @功能
Feature: 包含 @e2e @功能 的Feature
	 用来演示 cucumber 的 tag 测试

	 Background:
		When run features "包含 @e2e @功能 的Feature"	 

	 Scenario: 没有Tag的场景
	 	  When run scenario "没有Tag的场景" 

	 @压力测试
	 Scenario: 包含 @压力测试 的场景
	 	  When run scenario "包含 @压力测试 的场景" 