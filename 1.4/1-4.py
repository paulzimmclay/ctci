def pal_perm_checker(str1, str2):
    if str1 == str1[::-1] and str2 == str2[::-1]:
        if ''.join(sorted(str1)) == ''.join(sorted(str2)):
            return True
    return False


print(pal_perm_checker('thingniht', 'thniginht'))