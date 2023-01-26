## Functions

<dl>
<dt><a href="#configure">configure(config)</a></dt>
<dd></dd>
<dt><a href="#test">test(config)</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TwitchConfig">TwitchConfig</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UserFollowedCallback">UserFollowedCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#UserSubscribedCallback">UserSubscribedCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#UserGiftedSubscriptionsCallback">UserGiftedSubscriptionsCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#UserRaidedCallback">UserRaidedCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#ErrorCallback">ErrorCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#UserFollowedData">UserFollowedData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UserSubscribedData">UserSubscribedData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UserGiftedSubscriptionsData">UserGiftedSubscriptionsData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UserRaidedData">UserRaidedData</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TestConfig">TestConfig</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="EventType"></a>

## EventType : <code>enum</code>
**Kind**: global enum  
<a name="configure"></a>

## configure(config)
**Kind**: global function  

| Param | Type |
| --- | --- |
| config | [<code>TwitchConfig</code>](#TwitchConfig) | 

<a name="test"></a>

## test(config)
**Kind**: global function  

| Param | Type |
| --- | --- |
| config | [<code>TestConfig</code>](#TestConfig) | 

<a name="TwitchConfig"></a>

## TwitchConfig : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| apiKey | <code>string</code> | 
| [onUserFollowed] | [<code>UserFollowedCallback</code>](#UserFollowedCallback) | 
| [onUserSubscribed] | [<code>UserSubscribedCallback</code>](#UserSubscribedCallback) | 
| [onUserGiftedSubscriptions] | [<code>UserGiftedSubscriptionsCallback</code>](#UserGiftedSubscriptionsCallback) | 
| [onUserRaided] | [<code>UserRaidedCallback</code>](#UserRaidedCallback) | 
| [onError] | [<code>ErrorCallback</code>](#ErrorCallback) | 

<a name="UserFollowedCallback"></a>

## UserFollowedCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| data | [<code>UserFollowedData</code>](#UserFollowedData) | 

<a name="UserSubscribedCallback"></a>

## UserSubscribedCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| data | [<code>UserSubscribedData</code>](#UserSubscribedData) | 

<a name="UserGiftedSubscriptionsCallback"></a>

## UserGiftedSubscriptionsCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| data | [<code>UserGiftedSubscriptionsData</code>](#UserGiftedSubscriptionsData) | 

<a name="UserRaidedCallback"></a>

## UserRaidedCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| data | [<code>UserRaidedData</code>](#UserRaidedData) | 

<a name="ErrorCallback"></a>

## ErrorCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type |
| --- | --- |
| error | <code>Object</code> | 

<a name="UserFollowedData"></a>

## UserFollowedData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| userName | <code>string</code> | 

<a name="UserSubscribedData"></a>

## UserSubscribedData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| userName | <code>string</code> | 
| message | <code>string</code> | 
| durationMonths | <code>number</code> | 

<a name="UserGiftedSubscriptionsData"></a>

## UserGiftedSubscriptionsData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| userName | <code>string</code> | 
| total | <code>number</code> | 
| tier | <code>string</code> | 

<a name="UserRaidedData"></a>

## UserRaidedData : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| raiderName | <code>string</code> | 
| viewers | <code>number</code> | 

<a name="TestConfig"></a>

## TestConfig : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| apiKey | <code>string</code> | 
| eventType | [<code>EventType</code>](#EventType) | 
| [onError] | [<code>ErrorCallback</code>](#ErrorCallback) | 

