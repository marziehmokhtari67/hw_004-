function calculate_the_power_of_x_number_y(y,x){
    if(x===1) return y;
    else 
    {return y*calculate_the_power_of_x_number_y(y,x-1) };
}
console.log(calculate_the_power_of_x_number_y(2,3))