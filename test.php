<?php
$original_array = array("abcde", "abdf", "adeab", "abdgeee", "bdefa", "abc", "ab", "a", "bacdef");
echo "Original array: [\"" . implode('", "', $original_array); 
echo "\"]\n";
echo "Sorted array of strings by length: ";
usort($original_array, function($a, $b) {
	return strlen($a) <=> strlen($b);
});
echo "[\"" . implode('", "', $original_array) . "\"]\n";
?>
