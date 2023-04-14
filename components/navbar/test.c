#include <stdio.h>
#include <string.h>

int main()
{
    char str1[12] = {'\0'};
    char str2[4] = {'\0'};
    int i, k;
    strcpy(str1, "CSE");
    strcpy(str2, "UIU");
    i = strlen(str1);
    for (k = 0; str2[k] != '\0'; ++k)
        str1[i + k] = str2[k];
    puts(str1);
    printf("\n");
    strrev(str1);
    puts(str1);
    strcat(str1, str2);
    printf("\n");
    puts(str1);
    if (strcmp(str2, str1) < 0)
        printf("\nCSE");
    else
        printf("\nUIU");
    return 0;
}