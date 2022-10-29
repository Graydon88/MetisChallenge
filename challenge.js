/* 
Project steps:

Inputs = phone numbers of varying formats
output = 10 digit numbers without spaces or other characters that also remove the country code.

Steps:

function that receives input
remove non digit characters
examine the length
if the length is 10 digits (and doesn't include a 0 or a 1) we can return this value
if the length is 11 digits we need to remove the first value (should I just look for first position of 0 or 1? or use length?)
if the length is < 10 digits return null value


 */