#include <stdio.h>

int func(int a[2][3], int var3)
{

    if (a[1][2] == 3)
        return 1;

    a[1][2] = a[1][2] - 1;
    var3 = func(a, var3);

    return var3;
}

int main()
{

    int arr[2][3];

    arr[1][2] = 5;

    int var3 = 6;

    func(arr, var3);

    printf("arr[1] [2] = %d, var3 %d", arr[1][2], var3);
}