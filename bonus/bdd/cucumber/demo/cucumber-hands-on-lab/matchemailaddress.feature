Feature: Match an email address

    Scenario Outline: Match an email address
        When I type "<value>"
        Then should match

     Examples:
        | value |
        | yimin_shi@hotmail.com |
        | 1109520332@qq.com |
    
    Scenario Outline: Match a non-floating number
        When I type "<value>"
        Then should match

     Examples:
        | value |
        | yimin_shi@@hotmail.com |
        | 1109520332@qq.com.com.com |
   
