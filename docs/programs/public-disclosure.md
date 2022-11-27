---
title: "Public Disclosure"
path: "/programs/public-disclosure"
---

Public disclosure enables you to be transparent about the security vulnerabilities found for your program. HackerOne's public disclosure process balances transparency with control over what information is shared with the public.  

Programs can choose from 3 disclosure settings:

Option | Detail
------ | -------
Disclosure by Default | The hacker or your security team can request public disclosure for any closed report in your program. If the admin of your program agrees to disclosure, the contents of the report will be made public within 30 days.<br> <br>*This is the default setting for all verified programs*. 
Disclosure requiring Mutual Agreement | The hacker can request public disclosure for any closed report in your program. If your program security team agrees to disclosure, the contents of the report will be made public. If the security team doesn't take any action, the contents of the report will remain private. <br>*You must request to opt-in to this option.* 
Disclosure Disabled | Public disclosure isn't allowed for any report.

### Requesting Public Disclosure
Both hackers and program members can request public disclosure. To request public disclosure:
1) Go to the report you want to publicly disclose. 
2) Make sure the report is closed. 
3) Select **Request public disclosure** in the action picker at the bottom of the report. 
4) Select whether you want to disclose the **Full** report or **Limited**. 
   
   Option | Details
   ------ | -------
   Full | Upon public disclosure, the full contents of the report are visible including:<ul>Vulnerability information</ul><ul>Summary</ul><ul>Timeline such as comments and attachment</ul><br>*Note: Internal comments are hidden.*  
   Limited | Only the summary and timeline of the activity are visible. All comments and attachments are hidden. Limited disclosure allows for greater control over sensitive or extraneous information. 
   
5) *(Optional)* Enter a comment to describe your reasons for public disclosure. 
6) Click **Post**.    

![public-disclosure-2](./images/public-disclosure-2.png)

After public disclosure has been requested, the admin of the of the program can choose to publicly disclose the report. They can select **Disclose publicly** to disclose the report. 

![public-disclosure-3](./images/public-disclosure-3.png)

### Limiting Public Report Information

When publishing reports, the security team can choose to disclose the report in full or limit the information published. The default is to display all the communication between the hacker and the security team from first report to resolution. There are 2 times the security team can choose to limit information published in a report: 
* At the time they disclose the report
* After the report has been made public

There are 2 ways a security team can limit the information shared: 

Option | Detail
------ | -------
Redacting Sensitive Information | You can redact information in your report. In the **Visibility** field in your report, select **Redact**. This will enable you to provide the string of words you permanently want to redact from your report. <br>![public-disclosure-4](./images/public-discloure-4.png)
Limiting Visibility | Only the summary and timeline of the report are visible and all comments and attachments are hidden. You can limit visibility when requesting public disclosure. 

Here's a good example of a summarized disclosure from the Shopify security team: https://hackerone.com/reports/64164.

This diagram illustrates HackerOne's public disclosure process: 

![public-disclosure](./images/public-disclosure.png)

For more information, please read the full [HackerOne Disclosure Guidelines](https://hackerone.com/disclosure-guidelines).  There is a lengthier blog post on [Public Disclosure](https://hackerone.com/blog/public-disclosure-on-hackerone?utm_source=h1&utm_medium=help&utm_campaign=hdpdw) as well.  If disclosure was accidentally initiated or you have concerns about this process, please [submit a support request](https://support.hackerone.com/hc/en-us/requests/new).
